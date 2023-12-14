const CommentCard = ({ comment }) => {
    const date = new Date(comment.created_at)
    return (
    <li>
        <div className="p-2.5 border border-solid border-black m-2.5 rounded gap-0 text-left border-y bg-hue-card-bg">
            <h3 className="font-young text-left">{comment.author}</h3>
            <p>{comment.body}</p>
            <p className="text-right">Votes: {comment.votes}</p>
            <p className="text-right">Posted On {date.toDateString()}</p>
        </div>
    </li>
    )
}

export default CommentCard