<template>
  <div>
    <ul class="contentlist">
      <li v-for="item in listitems" v-bind:key="item.title" class="contentpost">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!--  -->
        <div class="contenttotal">
          <div class="contenttitle">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <!--  -->
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
            <!--  -->
          </div>
          <small class="itemtext">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`"
              class="usertext"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
   
    listitems() {
      return this.$store.state.list;
      // const Name = this.$route.name;
      // // console.log("err2")
      // if (Name === "news") {
      //   return this.$store.state.news;
      // } else if (Name === "ask") {
      //   return this.$store.state.ask;
      // } else Name === "jobs";
      // {
      //   return this.$store.state.jobs;
      // }
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