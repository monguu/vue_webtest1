<template>
  <div>
    <user-page v-on:userInfo="getUserInfo"></user-page>
    <!-- <p>ID: {{ getUserInfo.id }}</p>
    <p>Karma: {{ getUserInfo.karma }}</p>
    <p>Created: {{ getUserInfo.created }}</p> -->
  </div>
</template>

<script>
import UserPage from "../components/UserPage.vue"
export default {
  
  components: {
    UserPage
  },
  computed: {
    getUserInfo() {
       return this.$store.state.user
    }
  },
  created() {
  const usertext = this.$route.params.id;
  // console.log(this.$route)
  this.$store.dispatch("GET_USER", usertext)
  }
}
</script>

<style>

</style>