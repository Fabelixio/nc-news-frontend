import { useState, useEffect } from "react"
import ArticleCard from "./cards/ArticleCard"


const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getAllArticles()
        .then((articleArr) => {
            setArticles(articleArr)
        })
    }, [])

    return (
        <>
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />
        })}
        </>
    )
}

export default ArticleList