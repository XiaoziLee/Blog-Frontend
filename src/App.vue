<template>
    <div>
        <BlogNar></BlogNar>
        <router-view></router-view>
    </div>
</template>

<script>
import BlogNar from "./components/BlogNar.vue";
export default {
    components:{
        BlogNar
    },
    setup(props,context) {

    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*{
  margin: 0;
  padding: 0;
}
</style>
