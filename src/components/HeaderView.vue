<template>
  <div class="header">
    <div class="rogo">MONG NEWS</div>
    <div class="headerContent">
      <router-link to="news">News</router-link> |
      <router-link to="jobs">Jobs</router-link> |
      <router-link to="ask">Ask</router-link> |
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
}
.header a:active {
  color: rgb(88, 233, 44);
}
.header a {
  color: #fff;
  line-height: 50px;
}
.headerContent {
  padding: 0 0 0 30px;
}
.rogo {
  font-size: 30px;
}
</style>