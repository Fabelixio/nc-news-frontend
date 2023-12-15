import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nc-news-project-ek11.onrender.com/api'
})

export const getAllArticles = (topic) => {
    if(topic) {
        return api.get(`/articles?topic=${topic}`)
        .then(({ data }) => {
            return data.article
        })
    } else {
        return api.get("/articles")
        .then(({ data }) => {
            return data.article
        })
    }
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

export const postComment = (articleId, comment, user) => {
    const body = {
        username: user,
        body: comment,
    }
    return api.post(`/articles/${articleId}/comments`, body)
    .then(({ data }) => {
        console.log(data)
        return data.comment
    })
}

export const getAllUsers = () => {
    return api.get('/users')
    .then(({ data }) => {
       return data.users
    })
}

export const getAllTopics = () => {
    return api.get('/topics')
    .then(({ data }) => {
        return data.topics
    })
}

export const deleteComment = (commentId) => {
    return api.delete(`/comments/${commentId}`)
    .then((res) => {
        return res
    })
}