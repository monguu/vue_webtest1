<template>
  <list-item></list-item>
  <!-- <div>
    <ul class="jobslist">
      <li
        v-for="job in this.$store.state.jobs"
        v-bind:key="job.title"
        class="jobspost"
      >
        <div class="jobstotal">
          <div class="jobstitle">
            <a v-bind:href="job.url">
              {{ job.title }}
            </a>
          </div>
          <small class="usertext">
            {{ job.time_ago }} by
            <a v-bind:href="job.url" class="jobstext">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<script>
import ListItem from "../components/listitem.vue";
import DataGetListMixin from "../mixins/DataGetList.js";
export default {
  components: { ListItem },
  mixins: [DataGetListMixin],

  // data() {
  //   return {
  //     jobs: [],
  //   };
  // created() {
  //   Bus.$emit("start:spinner");
  //   setTimeout(() => {
  //       this.$store.dispatch("GET_JOBS")
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

<style scoped>
</style>