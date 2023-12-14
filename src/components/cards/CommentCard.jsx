import { UserContext } from "../../context/UserContext"
import { useState, useEffect, useContext } from "react"
import { deleteComment } from "../../utils/api"
const CommentCard = ({ comment }) => {
    const [deleted, setDeleted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const date = new Date(comment.created_at)
    const { user } = useContext(UserContext)
    const handleRemoval = (event) => {
        event.preventDefault()
        setDisableButton(true)
        deleteComment(comment.comment_id)
        .then((res) => {
            if(res.status === 204) {
                setDeleted(true)
                setIsError(false)
            }
        })
        .catch(() => {
            setIsError(true)
            setDisableButton(false)
        })
    }


    return (
    <li>
        <div className="text-center">
            {deleted ? <p>Comment Removed</p> : <div className="p-2.5 border border-solid border-black m-2.5 rounded gap-0 text-left border-y bg-hue-card-bg">
                <h3 className="font-young text-left">{comment.author}</h3>
                <p>{comment.body}</p>
                <p className="text-right">Votes: {comment.votes}</p>
                <p className="text-right">Posted On {date.toDateString()}</p>
                <div>{disableButton ? <p></p> :  <div>{user.username === comment.author ? <button onClick={handleRemoval} className="rounded-full py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
                hover:-translate-y-0.5 active:translate-y-0
                bg-transparent dark:bg-transparent hover:bg-teal-600 border-2 border-teal-300
                hover:border-teal-600 dark:border-teal-600 dark:hover:border-teal-600 text-teal-600 hover:text-white dark:text-teal-600 dark:hover:bg-teal-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2">Remove Comment</button> : <p></p>}</div>}</div>
                <div>{isError ? <p>Unable to remove comment, please try again later</p> : <p></p>}</div>
            </div>}  
        </div>
    </li>
    )
}

export default CommentCard