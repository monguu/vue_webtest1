<template>
  <div id="app">
    <header-view></header-view>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loading"></spinner>
  </div>
</template>

<script>
import Bus from "./utills/bus.js";
import HeaderView from "./components/HeaderView.vue";
import Spinner from "./components/Spinner.vue";
export default {
  components: {
    HeaderView,
    Spinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    },
  },
  created() {
    Bus.$on("start:spinner", this.startSpinner);
    Bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    Bus.$off("start:spinner", this.startSpinner);
    Bus.$off("end:spinner", this.endSpinner);
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
