import axios from "axios";

const request = axios.create({
    baseURL: 'http://ip:4000/blogs/',
    timeout: 5000
})


const writeBlogsRequest = (blogTitle,blogText,token)=> {
    return request({
        method: 'post',
        url: 'submitBlog',
        headers:{
            'token': token
        },
        data: {
            blog_title: blogTitle,
            blog_text: blogText
        }
    })
}

export { writeBlogsRequest }