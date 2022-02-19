import axios from "axios";
const request = axios.create({
    baseURL: 'http://ip:4000/blogs/',
    timeout: 5000
})

const getAllBlogsRequest = ()=> {
    return request({
        method: 'get',
        url: 'getAllBlogs'
    })
}

export { getAllBlogsRequest }