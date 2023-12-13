const CommentCard = ({ comment }) => {
    return (
    <li>
        <div className="p-2.5 border border-solid border-black">
            <h3>{comment.author}</h3>
            <p>Votes: {comment.votes}</p>
            <p>Posted On {comment.created_at}</p>
        </div>
    </li>
    )
}

export default CommentCard