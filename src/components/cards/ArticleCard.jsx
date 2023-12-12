import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
    return (
        <li>
            <div className="articlecard">
                <h2 className="article-card-header">{article.title}</h2>
                <p className="article-card-contents">{article.author}</p>
                <img src={article.article_img_url} alt='article cover image' />
                <p className="article-card-contents"> Date Posted: {article.created_at}</p>
                <p className="article-card-contents">Comments: {article.comment_count}</p>
                <Link to={`/articles/${article.article_id}`}>
                <button className="article-button">Go to Article</button>
                </Link>
            </div>
        </li>
    )
}

export default ArticleCard