<template>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="20">
            <el-input v-model="username" placeholder="Please input your username" clearable class="w-50 m-2">
                <template #prepend>Username</template>
            </el-input>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
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
            <el-input v-model="password" placeholder="Please input your password" clearable >
                <template #prepend>Password</template>
            </el-input>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="20">
            <el-input v-model="email" placeholder="Please input your email" clearable >
                <template #prepend>Email</template>
            </el-input>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="20">
            <el-input v-model="phone_number" placeholder="Please input your phone_number" clearable >
                <template #prepend>PhoneNumber</template>
            </el-input>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-button type="primary" round size="large" @click="register">Register</el-button>
        </el-col>
    </el-row>
</template>

<script>
import {registerRequest} from "../request/registerRequest"
import {ref} from "vue";
import {ElNotification} from 'element-plus'
import {useRouter} from "vue-router";

export default {
    name: "BlogRegister",
    setup(){
        const username = ref('')
        const nickname = ref('')
        const password = ref('')
        const email = ref('')
        const phone_number = ref('')
        const router = useRouter()
        const register =()=>{
            const registerInformation = {
                'user_name': username.value,
                'nick_name': nickname.value,
                'password': password.value,
                'email': email.value,
                'phone_number': phone_number.value
            }
            registerRequest(registerInformation).then((response)=>{
                if(response.data.status === 'OK'){
                    ElNotification({
                        title: 'Success',
                        message: 'Register Successfully',
                        type: 'success'
                    })
                    router.push('/loginAndRegister/login')
                }else{
                    ElNotification({
                        title: 'Error',
                        message: 'Register Failed',
                        type: 'error'
                    })
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        return {
            username,
            nickname,
            password,
            email,
            phone_number,
            register
        }
    }
}
</script>

<style scoped>
.el-row{
    margin-top: 20px;
}

.el-row:last-child{
    margin-bottom: 20px;
}
</style>