<template>
  <div>
    <section>
      <user-info :info="getedAsk">
        <router-link slot="username" v-bind:to="`/user/${getedAsk.user}`">{{
          getedAsk.user
        }}</router-link>
        <div slot="usertime">POST : {{ getedAsk.time_ago }}</div>
      </user-info>
      <!-- <div class="usertitle">
        <div class="usertext">
          <h3 class="username">
            <router-link v-bind:to="`/user/${getedAsk.user}`">
              {{ getedAsk.user }}
            </router-link>
          </h3>
          <div class="time">
            {{ getedAsk.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <div>
        <h1>{{ getedAsk.title }}</h1>
      </div>
      <div v-html="getedAsk.content"></div>
    </section>
  </div>
</template>

<script>
import UserInfo from "../components/UserPage.vue";
export default {
  components: {
    UserInfo,
  },
  computed: {
    getedAsk() {
      return this.$store.state.ask;
    },
  },
  created() {
    const askPage = this.$route.params.id;
    this.$store.dispatch("GET_ASKPAGE", askPage);
  },
};
</script>

<style scoped>
</style>