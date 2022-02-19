<template>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="20">
            <el-input v-model="nickname" placeholder="Please input your nickname" clearable >
                <template #prepend>Nickname</template>
            </el-input>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="20">
            <el-input v-model="password" type="password" placeholder="Please input password" show-password>
                <template #prepend>Password</template>
            </el-input>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-button type="primary" round size="large" @click="login">Login</el-button>
        </el-col>
    </el-row>
</template>

<script>
import {ref} from 'vue'
import {loginRequest} from "../request/loginRequest"
import {ElNotification} from 'element-plus'
import {useRouter} from "vue-router";
import cookie from "js-cookie";
export default {
    name: "BlogLogin",
    setup(props,context) {
        const nickname = ref('')
        const password = ref('')
        const router = useRouter()
        const login = ()=> {
            loginRequest(nickname.value,password.value).then((response)=>{
                console.log(response.data.status)
                if(response.data.status === 'OK'){
                    ElNotification({
                        title: 'Success',
                        message: 'Login Successfully',
                        type: 'success'
                    })
                    cookie.set('token',response.data.token,{
                        path: '',
                        expires: 365
                    })
                    router.push('/')
                }else{
                    ElNotification({
                        title: 'Error',
                        message: 'Login Failed',
                        type: 'error'
                    })
                }
            }).catch((error)=>{
                if(error){
                    console.log(error)
                }
            })
        }

        return {
            nickname,
            password,
            login
        }
    }
}
</script>

<style scoped>
.el-row{
    margin-top:20px;
}
.el-row:last-child{
    margin-bottom: 20px;
}
</style>
