import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getSingleArticle } from '../utils/api'


const ArticlePage = () => {
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    let {articleId} = useParams()

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
    const date = new Date(article.created_at)

    return (
        <section className="grid grid-cols-3 grid-rows-6 m-2.5 border border-solid border-black p-2 rounded-lg bg-hue-card-bg">
            <div className="col-span-3">
                <h2 className="text-center font-young underline text-hue-light text-3xl">{article.title}</h2>
            </div>
            <div className="row-span-2 col-start-2 row-start-2 m-2">
                <img src={article.article_img_url}/>
            </div>
            <div className="col-span-3 text-center row-start-4 m-2">
                <p>{article.body}</p>
            </div>
            <div className="row-start-5">
                <p>Posted by {article.author} <br/>On {date.toDateString()}</p>
            </div>
            <div className="row-start-6">
                <p>Votes: {article.votes}</p>
            </div>
        </section>
    )
}

export default ArticlePage