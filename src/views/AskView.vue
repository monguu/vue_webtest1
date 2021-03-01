<template>
  <div>
    <div v-for="item in getedAsk" v-bind:key="item.title">
      {{ item.title }}
    </div>
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