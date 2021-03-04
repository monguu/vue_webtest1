<template>
  <div>
    <section>
      <div class="usertitle">
        <div>
          <i class="far fa-user-circle usericon"></i>
        </div>
          <div class="usertext">
            <h3 class="username">
              <!-- <router-link v-bind:to="`/user/${getedAsk.user}`">
                {{ getedAsk.user }}
              </router-link> -->
              {{ userInfo.id }}
            </h3>
            <div class="time">
            {{ userInfo.created }}
            </div>
          </div>
      </div>
    </section>
      <section>
        <!-- <div>
          <h1>{{ getUserInfo.id }}</h1>
        </div>
        <div v-html="getUserInfo.created">
          {{ getedAsk.content }}
        </div> -->
    </section>
       
  </div>
</template>

<script>
export default {
    props: {
        userInfo: Object,
    },
  computed: {
    // getedAsk() {
    //   return this.$store.state.ask
    // },   
    // getUserInfo() {
    //    return this.$store.state.user
    // }
  
  },
  created () {
    const askPage = this.$route.params.id;
    this.$store.dispatch("GET_ASKPAGE", askPage)
  }
}
</script>

<style scoped>
.usertitle {
  display: flex;
  text-align: center;
  line-height: 200%;
  border: 3px solid rgb(12, 175, 148)
}
.usericon {
  font-size: 80px;
  padding: 10px;
  margin-top: 5px; 
  
}
.usertext {
  line-height: 80%;
  margin-left: 10px;
}
.time {
  font-size: 15px
}
.username {
  font-size: 30px;
}
</style>