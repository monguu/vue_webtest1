<template>
  <div>
    <ul class="contentlist">
      <li 
        v-for="item in this.$store.state.news" 
        v-bind:key="item.title"
        class="contentpost">
      <div class="points">
        {{ item.points }}
      </div>
        <div class="contenttotal">
          <p  class="contenttitle">
          <a v-bind:href="item.url">
          {{ item.title }}
          </a>
          </p>
            <small class="">
              {{item.time_ago}} by 
            <router-link v-bind:to="`/user/${item.user}`">
              {{item.user}}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       users: [],
  //     };
  //   },
  created() {
    this.$store.dispatch("GET_NEWS");
    // let vm = this;
    // getNewsContentList()
    //   .then((response) => (vm.users = response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style scoped>
.contentlist {
  margin: 0;
  padding: 0;
}
.contentpost {
  display: flex;
  list-style: none;
  border: 1px solid rgb(175, 177, 176);
  align-items: none;
}
.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color:rgb(8, 52, 110);
}
.contenttitle {
  margin: 0;
}
.contenttotal {
  
}
</style>