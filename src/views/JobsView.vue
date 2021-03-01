<template>
  <div>
    <div v-for="item in this.$store.state.jobs" v-bind:key="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  created() {
    this.$store.dispatch("GET_JOBS");
    // let vm = this;
    // getJobsList()
    //   .then((response) => (vm.job = response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style>
</style>