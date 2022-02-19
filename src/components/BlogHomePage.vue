<template>
    <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <el-table :data="blogsList" style="width: 100%">
                <el-table-column label="blogTitle" prop="blogTitle" />
                <el-table-column label="userId" prop="userId" />
                <el-table-column label="date" prop="date" />
                <el-table-column align="center">
<!--                    <template #header>-->
<!--                        <el-input v-model="searchBlogs" size="small" placeholder="Search Blogs" />-->
<!--                    </template>-->
                    <template #default="scope">
                        <el-button size="small" type="danger" @click="look(scope.$index)">look</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script>
import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import {getAllBlogsRequest} from "../request/getAllBlogsRequest";

export default {
    name: "BlogHomePage",
    setup(){
        const blogsList = ref([])
        const searchBlogs = ref('')
        const router = useRouter()
        const look = (index)=>{
            router.push('/blogs/' + blogsList.value[index].blogId)
        }
        onMounted(()=>{
            getAllBlogsRequest().then((response)=>{
                const handleArray = []
                console.log(response.data.blogsList);
                for (let i = 0;i < response.data.blogsList.length;i++){
                    const item = {
                        blogTitle: response.data.blogsList[i].blog_title,
                        userId: response.data.blogsList[i].user_id,
                        date: response.data.blogsList[i].blog_update_date,
                        blogId: response.data.blogsList[i].blog_id
                    }
                    handleArray.push(item)
                }
                blogsList.value = handleArray

            }).catch((err)=>{
                if(!err){
                   console.log(err)
                }
            })
        })

        onBeforeRouteUpdate(()=>{
            getAllBlogsRequest().then((response)=>{
                const handleArray = []
                for (let i = 0;i < response.data.blogsList.length;i++){
                    const item = {
                        blogTitle: response.data.blogsList[i].blog_title,
                        userId: response.data.blogsList[i].user_id,
                        date: response.data.blogsList[i].blog_update_date
                    }
                    handleArray.push(item)
                }
                blogsList.value = handleArray

            }).catch((err)=>{
                if(!err){
                    console.log(err)
                }
            })
        })

        return {
            blogsList,
            searchBlogs,
            look
        }
    }
}
</script>

<style scoped>
.el-row{
    margin-top: 20px;
}
</style>