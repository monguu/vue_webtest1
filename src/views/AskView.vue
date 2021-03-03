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

  // computed: {
  //   ...mapGetters({
  //     getedAsk: "getAsk",
  //   }),
  // },
  created() {
    this.$store.dispatch("GET_ASK");
  },
};
</script>

<style scoped>
.asklist {
  /* ul  . 표시 삭제 */
  margin: 0;
  padding: 0;
}
.askpost {
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
.asktitle {
  margin: 0;
}
.asktotal {
  display: block;
  padding: 10px 0;
  padding-left: 10px;
}
.asktext {
  color: rgb(129, 129, 129);
}
.itemtext {
  color: rgb(175, 39, 187);
}
</style>