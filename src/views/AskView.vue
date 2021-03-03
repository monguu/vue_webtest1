<template>
  <div>
    <p v-for="item in getedAsk" v-bind:key="item.title">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getedAsk: "getAsk",
    }),
  },
  // computed: {
  //   ...mapState({
  //     ask: (state) => state.ask,
  //   }),
  // ask () {
  //   this.$store.state.askList
  // }

  data() {
    return {
      askList: [],
    };
  },
  created() {
    this.$store.dispatch("GET_ASK");
    // let vm = this;
    // getAskList()
    //   .then((response) => (vm.askList = response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style>
</style>