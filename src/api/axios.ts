import axios from 'axios'
export const customAxios = axios.create({
    baseURL: 'https://dummyjson.com/users'
})