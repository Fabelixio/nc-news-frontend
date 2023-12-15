import { useState, useEffect } from "react"
import ArticleCard from "../cards/ArticleCard"
import { getAllArticles } from "../../utils/api"
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [orderBy, setOrderBy] = useState('descending')
    const [sortBy, setSortBy] = useState('created_at')
    const [value, setValue] = useState('created_at')
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
    if(isError) return <h2 className="font-young text-center">Error: Something went wrong</h2>

    return (
        <section>
            <div>
                <button onClick={() => orderManager('ASC')}>Ascending</button>
                <button onClick={() => orderManager('DESC')}>Descending</button>
                <label>Sort By
                <select onChange={(event) => sortManager(event.target.value)}>
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