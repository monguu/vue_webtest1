<template>
  <div>
    <section>
      <div class="usertitle">
        <div>
          <i class="far fa-user-circle usericon"></i>
        </div>
        <div class="usertext">
          <h3 class="username">
            <slot name="username"></slot>
          </h3>
          <div class="time">
            <slot name="usertime"></slot>
          </div>
          <div class="karma">
            <slot name="userkarma"></slot>
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
      <!-- <router-link v-bind:to="`/user/${getedAsk.user}`">
                {{ getedAsk.user }}
              </router-link> -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.usertitle {
  display: flex;
  line-height: 200%;
  border: 3px solid rgb(12, 175, 148);
}
.usericon {
  font-size: 80px;
  padding: 10px;
  margin-top: 5px;
}
.usertext {
  line-height: 50%;
  margin-left: 10px;
}
.time {
  font-size: 15px;
  padding-bottom: 10px;
  font-weight: bold;
  color: rgb(10, 156, 161);
}
.username {
  font-size: 20px;
  line-height: 110%;
  color: rgb(24, 77, 138);
}
.karma {
  font-weight: bold;
  color: rgb(221, 33, 80);
}
</style>