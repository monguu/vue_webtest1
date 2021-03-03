<template>
  <div>
     <p>ID: {{ getUserInfo.id }}</p>
     <p>Karma: {{ getUserInfo.karma }}</p>
      <p>Created: {{ getUserInfo.created }}</p>
  </div>
</template>

<script>
export default { 
  computed: {
    getUserInfo() {
       return this.$store.state.user
    }
  },
  created() {
  const userPage = this.$route.params.id;
  console.log(this.$route)
  this.$store.dispatch("GET_USER", userPage)
  }
}
</script>

<style>

</style>