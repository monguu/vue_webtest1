import ListView from "./ListView.vue";
import Bus from "../utills/bus.js";
export default function createView(name) {
  return {
    name: name,
    created() {
      Bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("GET_LIST", this.$route.name)
          .then(() => {
            Bus.$emit("end:spinner");
            console.log("spinner test");
          })
          .catch(() => {
            console.log("err");
          });
      }, 2000);
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
