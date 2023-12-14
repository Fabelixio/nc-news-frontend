import { useState, useEffect } from "react"
import ArticleCard from "../cards/ArticleCard"
import { getAllArticles } from "../../utils/api"

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const searchParams = new URLSearchParams(window.location.search)
    const topic = searchParams.get('topic')

    useEffect(() => {
        getAllArticles(topic)
        .then((articleArr) => {
            setArticles(articleArr)
            setIsLoading(false)
        })
        .catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [topic])
    if(isLoading) return <h2 className="font-young text-center">Loading...</h2>
    if(isError) return <h2 className="font-young text-center">Error: Something went wrong</h2>

    return (
        <section>
            <ul>
            {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />
        })}
            </ul>
        </section>
    )
}

export default ArticleList