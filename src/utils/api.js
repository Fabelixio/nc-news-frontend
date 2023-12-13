import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nc-news-project-ek11.onrender.com/api'
})

export const getAllArticles = () => {
    return api.get("/articles")
    .then(({ data }) => {
        return data.article
    })
}

export const getSingleArticle = (articleId) => {
    return api.get(`/articles/${articleId}`)
    .then(({ data }) => {
        return data.article
    })
}

export const getArticleComments = (articleId) => {
    return api.get(`/articles/${articleId}/comments`)
    .then(({ data }) => {
        return data.comments
    })
}