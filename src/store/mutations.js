export default {
  // (state값, actions에서 넘어온 값)
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASK(state, askList) {
    state.askList = askList;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ASKPAGE(state, ask) {
    state.ask = ask;
  },
};
