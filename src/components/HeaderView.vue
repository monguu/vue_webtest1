<template>
  <div class="header">
    <div class="rogo"><a href="/">MONG NEWS</a></div>
    <div class="headerContent">
      <router-link to="news">News</router-link> |
      <router-link to="jobs">Jobs</router-link> |
      <router-link to="ask">Ask</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: rgb(32, 196, 187);
  display: flex;
  padding: 8px;
  font-weight: bold;
}
.header a:active {
  color: rgb(5, 253, 100);
}
.header a {
  color: rgb(10, 84, 94);
  line-height: 50px;
}
.headerContent {
  padding: 0 0 0 30px;
}
.rogo {
  font-size: 30px;
  font-weight: bold;
}
a:hover {
  color: rgb(59, 240, 216);
}
</style>