


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
            return <ArticleCard key={} article={article} />
        })}
        </>
    )
}

export default ArticleList