import { useState, useEffect } from "react"
import { getSingleArticle, updateArticleVotes } from '../utils/api'
import SingleArticle from "./cards/SingleArticle"
import Error from "./Error"


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
    if(isError) return <Error message='The requested article could not be displayed, this might be because no article by that ID exists' />

    return (
        <section>
            <SingleArticle article={article} key={article.article_id} votes={votes} voteError={voteError}/>
            <button onClick={() => voteArticle(1)} className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
  text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
  hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600
  dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600
  dark:hover:bg-blue-600 dark:hover:text-white m-2.5">Upvote</button><br/>
            <button onClick={() => voteArticle(-1)} className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
  text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
  hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600
  dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600
  dark:hover:bg-blue-600 dark:hover:text-white m-2.5">Downvote</button>
        </section>
    )
}

export default ArticlePage