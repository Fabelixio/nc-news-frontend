import { useState, useEffect } from "react"
import { getSingleArticle, updateArticleVotes } from '../utils/api'
import SingleArticle from "./cards/SingleArticle"


const ArticlePage = ({ articleId }) => {
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [votes, setVotes] = useState(0)
    const [voteError, setVoteError] = useState(false)

    const voteArticle = (vote) => {
        setVotes((currVotes) => currVotes + vote)
        updateArticleVotes(articleId, vote)
        .then(() => {
            setVoteError(false)
        })
        .catch(() => {
            setVotes((prevVotes) => prevVotes - vote)
            setVoteError(true)
        })
    }

    useEffect(() => {
        getSingleArticle(articleId)
        .then((article) => {
            setArticle(article)
            setIsLoading(false)
            setVotes(article.votes)
        })
        .catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [])

  
    if(isLoading) return <h2 className="font-young text-center">Loading...</h2>
    if(isError) return <h2 className="font-young text-center">Error: Something went wrong</h2>

    return (
        <section>
            <SingleArticle article={article} key={article.article_id} votes={votes} voteError={voteError}/>
            <button onClick={() => voteArticle(1)} className="border m-1">Upvote</button><br/>
            <button onClick={() => voteArticle(-1)} className="border m-1">Downvote</button>
        </section>
    )
}

export default ArticlePage