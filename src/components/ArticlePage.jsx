import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getSingleArticle } from '../utils/api'
import SingleArticle from "./cards/SingleArticle"


const ArticlePage = () => {
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    let { articleId } = useParams()

    useEffect(() => {
        getSingleArticle(articleId)
        .then((article) => {
            setArticle(article)
            setIsLoading(false)
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
            <SingleArticle article={article} key={article.article_id} />
        </section>
    )
}

export default ArticlePage