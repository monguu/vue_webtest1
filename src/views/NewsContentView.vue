<template>
  <list-item></list-item>
</template>

<script>
// import Bus from "../utills/bus.js";
import ListItem from "../components/listitem.vue";
import DataGetListMixin from "../mixins/DataGetList.js"
export default {
  components: { ListItem, },
  mixins: [DataGetListMixin],
  // created() {
  //   Bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store.dispatch("GET_NEWS")
  //     .then(() => {
  //     Bus.$emit("end:spinner");
  //     console.log("spinner test");
  //   })
  //   .catch(() => {
  //     console.log("err")
  //   })
  //   },2000)
   
  // },
};
</script>

<style>
</style>