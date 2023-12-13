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

export const updateArticleVotes = (articleId, vote) => {
    return api.patch(`articles/${articleId}`, {inc_votes: vote})
}

export const postComment = (articleId, comment) => {
    const body = {
        username: 'icellusedkars',
        body: comment,
    }
    console.log(body)
    //hardcoded, needs to use context// 400 bad request, comment not sending - problaly local not db issue
    return api.post(`/articles/${articleId}/comments`, body)
    .then(({ data }) => {
        return data.comment
    })
}