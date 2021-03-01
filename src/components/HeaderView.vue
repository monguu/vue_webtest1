<template>
  <div class="header">
     <router-link to="news">News</router-link> |
      <router-link to="jobs">Jobs</router-link> |
       <router-link to="ask">Ask</router-link> |
  </div>
</template>

<script>
export default {

} 
</script>

<style scoped>
.header {
  color:white;
  background-color: rgb(32, 196, 187);  
  display: flex;
  padding: 8px;
}
.header a:active {
  color: rgb(88, 233, 44)
}
.header a {
  color: #fff;
}
</style>