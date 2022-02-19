<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
            <el-image src="../../blogsIcon.png"></el-image>
            Blogs
        </el-menu-item>
        <el-menu-item index="2" @click="homepage">
            <div>HomePage</div>
        </el-menu-item>
        <el-menu-item index="3" @click="writeBlogs">
            <div>WriteBlogs</div>
        </el-menu-item>
        <el-menu-item index="4" @click="login">
            <div>Login</div>
        </el-menu-item>
        <el-menu-item index="5" @click="register">
            <div>Register</div>
        </el-menu-item>
        <el-menu-item index="6" @click="logout">
            <div>Logout</div>
        </el-menu-item>
    </el-menu>
</template>


<script>
import {ref} from 'vue'
import {useRouter,useRoute} from "vue-router"
import cookie from "js-cookie";
import {ElNotification} from 'element-plus'

export default {
    name: "BlogNar",
    components:{

    },
    setup(props,context) {
        const route = useRoute()
        const router = useRouter()
        const activeIndex = ref('1')
        const login = ()=>{
            router.push('/loginAndRegister/login')
        }
        const register = ()=>{
            router.push('/loginAndRegister/register')
        }
        const homepage = ()=>{
            router.push('/')
        }

        const writeBlogs = ()=>{
            router.push('/writeBlogs')
        }
        const logout = ()=>{
            cookie.remove('token',{
                path: ''
            })
            ElNotification({
                title: 'Tip',
                message: 'You have logged out!',
                type: 'success'
            })
            router.push('/')
        }
        return {
            activeIndex,
            login,
            register,
            homepage,
            writeBlogs,
            logout
        }
    }
}
</script>


<style scoped>
div{
    height: 64px;
    width: 64px;
    line-height: 64px
}
</style>
