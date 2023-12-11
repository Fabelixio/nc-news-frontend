import { useState, useEffect } from "react"
import ArticleCard from "./cards/ArticleCard"
import { getAllArticles } from "../utils/api"


const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getAllArticles()
        .then((articleArr) => {
            setArticles(articleArr)
        })
    }, [])

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