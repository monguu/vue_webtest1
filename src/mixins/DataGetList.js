import Bus from "../utills/bus.js";
export default {
  created() {
    Bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("GET_LIST", this.$route.name)
        .then(() => {
          console.log(2);
          Bus.$emit("end:spinner");
          console.log("spinner test");
        })
        .catch(() => {
          console.log("err");
        });
    }, 2000);
  },
};
