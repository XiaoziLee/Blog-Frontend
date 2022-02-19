import axios from "axios";
const request = axios.create({
    baseURL: 'http://ip:4000/user/',
    timeout: 5000
})

const registerRequest = (registerInformation)=> {
    return request({
        method: 'post',
        url: 'register',
        data: {
            user_name: registerInformation.user_name,
            nick_name: registerInformation.nick_name,
            password: registerInformation.password,
            email: registerInformation.email,
            phone_number: registerInformation.phone_number
        }
    })
}

export { registerRequest }