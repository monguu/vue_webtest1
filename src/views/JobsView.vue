<template>
  <div>
    <ul class="jobslist">
      <li
        v-for="job in this.$store.state.jobs"
        v-bind:key="job.title"
        class="jobspost"
      >
        <!-- <div class="points">
          {{ job.points }}
        </div> -->
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
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  created() {
    this.$store.dispatch("GET_JOBS");
    // let vm = this;
    // getJobsList()
    //   .then((response) => (vm.job = response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style scoped>
.jobslist {
  margin: 0;
  padding: 0;
}
.jobspost {
  display: flex;
  list-style: none;
  border: 1px solid rgb(175, 177, 176);
  align-items: none;
}
.points {
  display: flex;
  width: 4rem;
  height: 60px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: rgb(8, 52, 110);
}
.jobstitle {
  margin: 0;
}
.jobstotal {
  display: block;
  padding: 10px 0;
  padding-left: 10px;
}
.usertext {
  color: rgb(129, 129, 129);
}
.jobstext {
  color: rgb(175, 39, 187);
}
</style>