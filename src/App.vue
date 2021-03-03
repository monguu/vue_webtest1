<template>
  <div id="app">
    <header-view></header-view>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";

export default {
  components: {
    HeaderView,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: rgb(44, 18, 116);
  text-decoration: none;
}
a.router-link-active {
  text-decoration: underline;
}
a:hover {
  color: rgb(8, 235, 216);
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
