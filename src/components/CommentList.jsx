import { useState, useEffect } from "react"
import CommentCard from "./cards/CommentCard"
import { getArticleComments } from "../utils/api"

const CommentList = ({ articleId }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [commentsExist, setCommentsExist] = useState(true)

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
    if(isLoading) return <h2 className="font-young text-center">Loading...</h2>
    if(isError) return <h2 className="font-young text-center">Error: Something went wrong</h2>
    if(!commentsExist) return <h2 className="font-young text-center m-5">This comment section is empty, why not be the first?</h2>

    return (
        <section>
            <ul>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} />
                })}
            </ul>
        </section>
    )
}

export default CommentList