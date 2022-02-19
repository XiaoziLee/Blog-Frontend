<template>
    <el-card class="box-card">
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="16">
                <h3>{{blogTitle}}</h3>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="16">
                <p>{{blogText}}</p>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </el-card>
</template>

<script>
import {useRoute} from "vue-router";
import {getBlogByIdRequest} from "../request/getBlogByIdRequest";
import {onMounted, ref} from "vue";

export default {
    name: "Blog",
    setup(){
        const route = useRoute()
        const blogTitle = ref('')
        const blogText = ref('')
        onMounted(()=>{
            getBlogByIdRequest(route.params.blogId).then((response)=>{
                blogTitle.value = response.data.blogData.blog_title
                blogText.value = response.data.blogData.blog_text
            }).catch((err)=>{
                console.log(err)
            })
        })

        return {
            blogTitle,
            blogText
        }
    }
}
</script>

<style scoped>

</style>