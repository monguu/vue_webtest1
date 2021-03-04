<template>
  <div>
    <UserPage :info="getUserInfo">
      <span slot="username">USER: {{ getUserInfo.id }}</span>
      <span slot="usertime">JOINED: {{ getUserInfo.created }}</span>
      <span slot="userkarma">KARMA: {{ getUserInfo.karma }}</span>
    </UserPage>
  </div>
</template>

<script>
import UserPage from "../components/UserPage.vue";
export default {
  components: {
    UserPage,
  },
  computed: {
    getUserInfo() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  created() {
    const usertext = this.$route.params.id;
    // console.log(this.$route)
    this.$store.dispatch("GET_USER", usertext);
  },
};
</script>

<style>
</style>