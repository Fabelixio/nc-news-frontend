import { useState, useEffect } from "react"
import CommentCard from "./cards/CommentCard"
import { getArticleComments } from "../utils/api"

const CommentList = ({ articleId }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getArticleComments(articleId)
        .then((commentArr) => {
            setComments(commentArr)
            setIsLoading(false)
        })
        .catch(() => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])
    if(isLoading) return <h2 className="font-young text-center">Loading...</h2>
    if(isError) return <h2 className="font-young text-center">Error: Something went wrong</h2>

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