
const SingleArticle = ({ article, votes, voteError }) => {
    const date = new Date(article.created_at)
    return (
        <div className="grid grid-cols-3 grid-rows-6 m-2.5 border border-solid border-black p-2 max-h-fit rounded-lg bg-hue-card-bg">
            <div className="col-span-3">
                <h2 className="text-center font-young underline text-hue-light text-3xl">{article.title}</h2>
            </div>
            <div className="row-span-2 col-start-2 row-start-2 m-2">
                <img src={article.article_img_url}/>
            </div>
            <div className="col-span-3 text-left row-start-4 m-2">
                <p>{article.body}</p>
            </div>
            <div className="row-start-5">
                <p>Posted by {article.author} <br/>On {date.toDateString()}</p>
            </div>
            <div className="row-start-6">
                <p>Votes: {votes}</p>
                {voteError ? <p>Something went wrong, please try again later</p> : <p></p>}
            </div>
        </div>
    )
}
    
export default SingleArticle