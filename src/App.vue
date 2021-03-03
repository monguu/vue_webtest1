<template>
  <div id="app">
    <header-view></header-view>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
