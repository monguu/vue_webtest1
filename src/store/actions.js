import {
  getJobsList,
  getNewsContentList,
  getAskList,
  getUserPage,
  getAskPage,
  getList,
} from "../api/index.js";
export default {
  // GET_NEWS(context) {
  //   return getNewsContentList()
  //     .then((response) => {
  //       context.commit("SET_NEWS", response.data);
  //       // 받아온 데이터를 다시 news에 리턴 해줌,
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  async GET_NEWS(context) {
    try {
      const response = await getNewsContentList()
      context.commit("SET_NEWS", response.data)
      return response
    } catch (err) {
      console.log(err)
    }
  },
  // GET_ASK(context) {
  //   return getAskList()
  //     .then((response) => {
  //       context.commit("SET_ASK", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  async GET_ASK(context) {
    const response = await getAskList()
    context.commit("SET_ASK", response.data)
    return response
  },
  // GET_JOBS() {
  //   return getJobsList()
  //     .then((response) => {
  //       this.commit("SET_JOBS", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  async GET_JOBS(context) {
    const response = await getJobsList()
    context.commit("SET_JOBS", response.data)
    return response
  },
  GET_USER({ commit }, userPage) {
    return getUserPage(userPage)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  GET_ASKPAGE({ commit }, askPage) {
    return getAskPage(askPage)
      .then(({ data }) => {
        commit("SET_ASKPAGE", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // GET_LIST({ commit }, pageName) {
  //   return getList(pageName)
  //     .then((response) => {
  //       console.log(1);
  //       commit("SET_LIST", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  async GET_LIST(context, pageName) {
    try {
      const response = await getList(pageName)
      context.commit("SET_LIST", response.data)
      return response;
    } catch (err) {
      console.log(err)
    }
  }
};
