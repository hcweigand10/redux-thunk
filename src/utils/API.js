import axios from 'axios'

const jsonPlaceholder = 'https://jsonplaceholder.typicode.com'

export default axios.create({
    baseURL: jsonPlaceholder
})