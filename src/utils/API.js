import axios from 'axios'

const jsonPlaceholderAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const API = {
    getPosts: async () => {
        const response = jsonPlaceholderAPI.get('/posts')
        return response
    },
    getUser: async (userId) => {
        const response = jsonPlaceholderAPI.get(`/users/${userId}`)
        return response
    }
}

export default API