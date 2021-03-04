<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/listitem.vue";
import Bus from "../utills/bus.js";
export default {
  components: { ListItem },
  created() {
    Bus.$emit("start:spinner");
    this.$store.dispatch("GET_NEWS");
    Bus.$emit("end:spinner");
  },
};
</script>

<style>
</style>