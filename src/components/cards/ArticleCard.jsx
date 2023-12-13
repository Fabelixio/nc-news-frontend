import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
    return (
        <li>
            <div className="p-2.5 border border-solid border-black m-2.5 rounded gap-0 text-center border-y bg-hue-card-bg">
                <h2 className="font-young underline text-hue-light">{article.title}</h2>
                <p className="article-card-contents">{article.author}</p>
                <Link to={`/articles/${article.article_id}`}>
                <img className='cursor-pointer' src={article.article_img_url} alt='article cover image' />
                </Link>
                <p className="article-card-contents"> Date Posted: {article.created_at}</p>
                <p className="article-card-contents">Comments: {article.comment_count}</p>
                <Link to={`/articles/${article.article_id}`}>
                <button >Go to Article</button>
                </Link>
            </div>
        </li>
    )
}

export default ArticleCard