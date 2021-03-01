<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue"


export default {
  components: {
    HeaderView,
    },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
