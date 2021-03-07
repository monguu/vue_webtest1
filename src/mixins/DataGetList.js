import Bus from "../utills/bus.js";
export default {
  mounted() {
    Bus.$emit("end:spinner");
  }
};
