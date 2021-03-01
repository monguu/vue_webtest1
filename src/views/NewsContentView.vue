<template>
  <div>
      <div v-for="user in users" key="">{{user.title}}</div>
  </div>
</template>

<script>
import { getNewsContentList } from "../api/index.js"
export default {
    data() {
        return {
            users: [],
        }
    },
    created () {
        getNewsContentList()
        .then(response => this.user = response.data)
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>

</style>