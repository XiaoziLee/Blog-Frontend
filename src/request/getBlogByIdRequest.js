import axios from "axios";
const request = axios.create({
    baseURL: 'http://ip:4000/blogs/',
    timeout: 5000
})

const  getBlogByIdRequest = (blogId)=> {
    return request({
        method: 'post',
        url: 'getBlogById',
        data:{
            blogId: blogId
        }
    })
}


export { getBlogByIdRequest }