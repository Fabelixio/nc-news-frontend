import { useState, useEffect } from "react"
import ArticleCard from "../cards/ArticleCard"
import { getAllArticles } from "../../utils/api"
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import Error from "../Error"

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    
    const query = new URLSearchParams(window.location.search)
    const topic = query.get('topic')
    const order =  searchParams.get("order") || 'DESC'
    const sort = searchParams.get('sort_by') || 'created_at'
    const location = useLocation()


    const orderManager = (orderby) => {
        const params = new URLSearchParams(searchParams)
        params.set('order', orderby)
        setSearchParams(params)
    }
    const sortManager = (sortby) => {
        const params = new URLSearchParams(searchParams)
        console.log(params)
        params.set('sort_by', sortby)
        setSearchParams(params)
    }

    useEffect(() => {
        getAllArticles(topic, order, sort)
        .then((articleArr) => {
            setArticles(articleArr)
            setIsLoading(false)
        })
        .catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [location, order])
    if(isLoading) return <h2 className="font-young text-center">Loading...</h2>
    if(isError) return <Error message='No articles can be displayed' />

    return (
        <section>
            <div className="border rounded-md m-2.5 bg-hue-card-bg p-2.5">
                <button className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
  text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
  hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600
  dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600
  dark:hover:bg-blue-600 dark:hover:text-white m-2.5" onClick={() => orderManager('ASC')}>Ascending</button>
                <button className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
  text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
  hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600
  dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600
  dark:hover:bg-blue-600 dark:hover:text-white m-2.5" onClick={() => orderManager('DESC')}>Descending</button>
                <label>Sort By:
                <select className="bg-hue-card-bg border rounded-md" onChange={(event) => sortManager(event.target.value)}>
                        <option value='created_at'>Date</option>
                        <option value='comment_count'>Comments</option>
                        <option value='votes'>Votes</option>
                        <option value='author'>Author</option>
                        <option value='title'>Title</option>
                    </select>
                </label>
            </div>
            <ul>
            {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />
        })}
            </ul>
        </section>
    )
}

export default ArticleList