import { useState, useEffect, useContext } from "react"
import CommentCard from "./cards/CommentCard"
import { getArticleComments, postComment} from "../utils/api"
import { UserContext } from "../context/UserContext"
import Error from "./Error"

const CommentList = ({ articleId }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [commentErr, setCommentErr] = useState(false)
    const [commentsExist, setCommentsExist] = useState(true)
    const [newComment, setNewComment] = useState('')
    const [submittable, setSubmittable] = useState(true)
    const [postUpdate, setPostUpdate] = useState('')

    const { user } = useContext(UserContext)

    useEffect(() => {
        getArticleComments(articleId)
        .then((commentArr) => {
            setComments(commentArr)
            setIsLoading(false)
            if(commentArr.length === 0) {
                setCommentsExist(false)
            }
        })
        .catch(() => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])
    if(isLoading) return <h2 className="font-young text-center">Loading Comments...</h2>
    if(isError) return <Error message='Comments cannot be displayed, this could be beacuse the article requested does not exist'/>

    const submitComment = (event) => {
        event.preventDefault()
        if(submittable) {
            setSubmittable(false)
            setPostUpdate('Posting...')
            postComment(articleId, newComment, user.username)
            .then((postedComment) => {
                setNewComment('')
                setComments((currComments) => {
                    return [postedComment, ...currComments]
                })
                setPostUpdate('Comment Posted')
            })
            .catch(() => {
                setCommentErr(true)
            })
            .finally(() => {
                setPostUpdate('')
                setSubmittable(true)
            })
        }
    }

    return (
        <section>
            <div>{commentsExist ? <p></p> : <h2 className="font-young text-center m-5">This comment section is empty, why not be the first?</h2>}</div>
            <h2 className="underline font-young m-2.5">Comments</h2>
            <h2>{postUpdate}</h2>
            <form onSubmit={submitComment} className="border rounded-md m-5 p-2.5">
                <label htmlFor="commentText">Comment text:</label>
                <textarea
                id="commentText"
                onChange={(event) => setNewComment(event.target.value)}
                multiline='true'
                required
                placeholder=' Enter comment...'
                value={newComment}>
                </textarea>
                <button className="rounded-full py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
      hover:-translate-y-0.5 active:translate-y-0
      bg-transparent dark:bg-transparent hover:bg-teal-600 border-2 border-teal-300
      hover:border-teal-600 dark:border-teal-600 dark:hover:border-teal-600 text-teal-600 hover:text-white dark:text-teal-600 dark:hover:bg-teal-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2">Post Comment</button>
                <div>{commentErr ? <p>Failed to post comment, please try again later...</p> : <p></p>}</div>
            </form>
            <ul>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} />
                })}
            </ul>
        </section>
    )
}

export default CommentList