<template>
  <list-item></list-item>
  <!-- <div>
    <ul class="asklist">
      <li v-for="item in getedAsk" v-bind:key="item.title" class="askpost">
        <div class="points">
          {{ item.points }}
        </div>
        <div class="asktotal">
          <div class="asktitle">
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </div>
          <small class="itemtext">
            {{ item.time_ago }}
            <router-link v-bind:to="`/user/${item.user}`" class="asktext">
              by {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<script>

import ListItem from "../components/listitem.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    ListItem,
  },
  // created() {
  //   Bus.$emit("start:spinner");
  //   setTimeout(() => {
  //       this.$store.dispatch("GET_ASK")
  //     .then(() => {
  //     Bus.$emit("end:spinner");
  //     console.log("spinner test");
  //   })
  //   .catch(() => {
  //     console.log("err")
  //   })
  //   },2000)
   
  // },
  // computed: {
  //   ...mapGetters({
  //     getedAsk: "getAsk",
  //   }),
  // },
  // created() {
  //   this.$store.dispatch("GET_ASK");
  // },
};
</script>

<style scoped>
</style>