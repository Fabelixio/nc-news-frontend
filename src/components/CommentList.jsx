import { useState, useEffect } from "react"
import CommentCard from "./cards/CommentCard"
import { getArticleComments, postComment} from "../utils/api"

const CommentList = ({ articleId }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [commentsExist, setCommentsExist] = useState(true)
    const [newComment, setNewComment] = useState('')
    const [submittable, setSubmittable] = useState(true)
    const [postUpdate, setPostUpdate] = useState('')

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
    if(isError) return <h2 className="font-young text-center">Error: Something went wrong</h2>
    if(!commentsExist) return <h2 className="font-young text-center m-5">This comment section is empty, why not be the first?</h2>

    const submitComment = (event) => {
        event.preventDefault()
        if(submittable) {
            setSubmittable(false)
            setPostUpdate('Posting...')
            postComment(articleId, newComment)
            .then((postedComment) => {
                setNewComment('')
                setComments((currComments) => {
                    return [postedComment, ...currComments]
                })
                setPostUpdate('Comment Posted')
            })
            .catch(() => {
                setPostUpdate('Unable to post, try again later')
            })
            .finally(() => {
                setPostUpdate('')
                setSubmittable(true)
            })
        }
    }

    return (
        <section>
            <h2 className="underline font-young">Comments</h2>
            <h2>{postUpdate}</h2>
            <form onSubmit={submitComment}>
                <label htmlFor="commentText">Comment text:</label>
                <textarea
                id="commentText"
                onChange={(event) => setNewComment(event.target.value)}
                required
                value={newComment}>
                </textarea>
                <button className="border m-1">Post Comment</button>
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