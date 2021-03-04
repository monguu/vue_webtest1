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
export default {
  components: { ListItem },
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  created() {
    this.$store.dispatch("GET_JOBS");
  },
};
</script>

<style scoped>
</style>