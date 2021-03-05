import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    askList: {},
    jobs: [],
    user: {},
    ask: [],
    list: [],

  },
  getters: {},
  mutations: mutations,
  actions: actions,
});
