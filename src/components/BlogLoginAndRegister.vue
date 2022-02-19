<template>
    <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <el-button class="button" :type="buttonStyleOfLogin" @click="GotoLogin">Login</el-button>
                        <el-button class="button" :type="buttonStyleOfRegister" @click="GotoRegister">Register</el-button>
                    </div>
                </template>
                <router-view></router-view>
            </el-card>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>
</template>

<script>
import {onBeforeRouteUpdate, useRoute, useRouter, onBeforeRouteLeave} from 'vue-router'
import {ref,onMounted} from "vue"
import BlogLogin from "./BlogLogin.vue"
import BlogRegister from "./BlogRegister.vue"
export default {
    name: "BlogLoginAndRegister",
    components:{
        BlogLogin,
        BlogRegister
    },
    setup(props,context){
        const route = useRoute()
        const router = useRouter()

        const buttonStyleOfLogin = ref('primary')
        const buttonStyleOfRegister = ref('text')
        const GotoLogin = () =>{
            router.push('/loginAndRegister/login')
        }
        const GotoRegister = () =>{
            router.push('/loginAndRegister/register')
        }

        onBeforeRouteUpdate((to,from)=>{
            if(to.path.endsWith('login')){
                buttonStyleOfLogin.value = 'primary'
                buttonStyleOfRegister.value = 'text'
            }else if(to.path.endsWith('register')){
                buttonStyleOfRegister.value = 'primary'
                buttonStyleOfLogin.value = 'text'
            }
        })

        onMounted(()=>{
            if(route.path.endsWith('login')){
                buttonStyleOfLogin.value = 'primary'
                buttonStyleOfRegister.value = 'text'
            }else if(route.path.endsWith('register')){
                buttonStyleOfRegister.value = 'primary'
                buttonStyleOfLogin.value = 'text'
            }
        })

        return {
            GotoLogin,
            GotoRegister,
            buttonStyleOfLogin,
            buttonStyleOfRegister
        }

    }
}
</script>

<style scoped>
.el-row{
    margin-top: 100px;
}
</style>