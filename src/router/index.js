import {createRouter,createWebHashHistory} from "vue-router";
import BlogLoginAndRegister from "../components/BlogLoginAndRegister.vue";
import BlogLogin from "../components/BlogLogin.vue";
import BlogRegister from "../components/BlogRegister.vue";
import BlogHomePage from "../components/BlogHomePage.vue";
import BlogWritePage from "../components/BlogWritePage.vue";
import Blog from "../components/Blog.vue";

const routes = [
    {
        path:'/',
        name: 'home',
        component: BlogHomePage
    },
    {
        path: '/writeBlogs',
        name: 'writeBlogs',
        component: BlogWritePage
    },
    {
        path: '/loginAndRegister',
        name: 'loginAndRegister',
        component: BlogLoginAndRegister,
        redirect: '/loginAndRegister/login',
        children: [
            {
                path: 'login',
                name: 'login',
                component: BlogLogin
            },
            {
                path: 'register',
                name: 'register',
                component: BlogRegister
            }
        ]
    },
    {
        path: '/blogs/:blogId',
        name: 'blogs',
        component: Blog
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router