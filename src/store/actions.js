import {
  getJobsList,
  getNewsContentList,
  getAskList,
  getUserPage,
  getAskPage,
} from "../api/index.js";
export default {
  GET_NEWS(context) {
    getNewsContentList(context)
      .then((response) => {
        console.log(response);
        context.commit("SET_NEWS", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  GET_ASK(context) {
    getAskList(context)
      .then((response) => {
        context.commit("SET_ASK", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  GET_JOBS() {
    getJobsList()
      .then((response) => {
        this.commit("SET_JOBS", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  GET_USER({ commit }, userPage) {
    getUserPage(userPage)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  GET_ASKPAGE({ commit }, askPage) {
    getAskPage(askPage)
      .then(({ data }) => {
        commit("SET_ASKPAGE", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
