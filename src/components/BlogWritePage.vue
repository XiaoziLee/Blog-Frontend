<template>
    <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <el-card>
                <el-row>
                    <el-input v-model="blogTitle" type="textarea" placeholder="Please input blog title"/>
                </el-row>
                <el-row>
                    <el-input v-model="blogText" :autosize="{ minRows: 10, maxRows: 20 }" type="textarea" placeholder="Please input blog context"></el-input>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-button type="primary" :disabled="isLogin" @click="deliver">Deliver</el-button>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script>
import {ref,onMounted} from "vue"
import {writeBlogsRequest} from "../request/writeBlogsRequest"
import {onBeforeRouteUpdate} from 'vue-router'
import cookie from "js-cookie"
import {ElNotification} from 'element-plus'

export default {
    name: "BlogWritePage",
    setup(){
        const blogTitle = ref('')
        const blogText = ref('')
        const isLogin = ref(false)

        const deliver = ()=>{
            writeBlogsRequest(blogTitle.value,blogText.value,cookie.get('token')).then((response)=>{
                if(response.data.status === 'OK'){
                    ElNotification({
                        title: 'Success',
                        message: 'Deliver Successfully',
                        type: 'success'
                    })
                }
            }).catch((err)=>{

            })
        }

        onMounted(()=>{
            isLogin.value = !cookie.get('token')
            if(isLogin.value){
                ElNotification({
                    title: 'Tip',
                    message: 'You can deliver blogs after Log in.',
                    type: 'success'
                })
            }
        })

        onBeforeRouteUpdate((to,from)=>{
            if(to.path.endsWith('writeBlogs')){
                isLogin.value = !cookie.get('token')
            }
            if(isLogin.value){
                ElNotification({
                    title: 'Tip',
                    message: 'You can deliver blogs after Log in.',
                    type: 'success'
                })
            }
        })

        return {
            blogTitle,
            blogText,
            isLogin,
            deliver
        }
    }
}
</script>

<style scoped>
.el-row:first-child{
    margin-top: 20px;
}
.el-row{
    margin-top: 30px;
}
.el-row:last-child{
    margin-bottom: 20px;
}
</style>