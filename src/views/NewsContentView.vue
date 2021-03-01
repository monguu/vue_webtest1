<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.title">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       users: [],
  //     };
  //   },
  created() {
    this.$store.dispatch("GET_NEWS");
    // let vm = this;
    // getNewsContentList()
    //   .then((response) => (vm.users = response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style>
</style>