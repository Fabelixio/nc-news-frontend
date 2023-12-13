import { useParams } from 'react-router-dom'
import ArticlePage from '../ArticlePage'
import CommentList from '../CommentList'

const ArticleDisplayPage = () => {
    const { articleId } = useParams()

    return (
        <>
        <ArticlePage articleId={articleId} />
        <CommentList articleId={articleId} />
        </>
    )
}

export default ArticleDisplayPage