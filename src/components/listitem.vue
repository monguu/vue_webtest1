<template>
  <div>
    <ul class="contentlist">
      <li
        v-for="item in this.$store.state.news"
        v-bind:key="item.title"
        class="contentpost"
      >
        <div class="points">
          {{ item.points }}
        </div>
        <div class="contenttotal">
          <div class="contenttitle">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </div>
          <small class="itemtext">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="usertext">
              {{ item.user }}
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
    const routernName = this.$route.name;
    const listPage = this.$store.dispatch;
    if (routernName === "news") {
      listPage("GET_NEWS");
    } else if (routernName === "ask") {
      listPage("GET_ASK");
    } else if (routernName === "jobs") {
      listPage("GET_JOBS");
    }
  },
};
</script>

<style>
.contentlist {
  /* ul  . 표시 삭제 */
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
  width: 4rem;
  height: 60px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: rgb(8, 52, 110);
}
.contenttitle {
  margin: 0;
}
.contenttotal {
  display: block;
  padding: 10px 0;
  padding-left: 10px;
}
.usertext {
  color: rgb(129, 129, 129);
}
.itemtext {
  color: rgb(175, 39, 187);
}
</style>