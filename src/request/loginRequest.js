import axios from "axios";
const request = axios.create({
    baseURL: 'http://ip:4000/user/',
    timeout: 5000
})

const loginRequest = (nickname, password)=> {
    return request({
        method: 'post',
        url: 'login',
        data: {
            nick_name: nickname,
            password: password
        }
    })
}

export { loginRequest }



