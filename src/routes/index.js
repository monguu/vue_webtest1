import Vue from "vue";
import VueRouter from "vue-router";
import AskView from "../views/AskView.vue";
import NewsContentView from "../views/NewsContentView.vue";
// import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import CreateView from "../views/CreateView.js";
import Bus from "../utills/bus.js";
import { store } from "../store/index.js";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsContentView,
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("GET_LIST", to.name, from.name)
            .then(() => {
              // console.log(2);
              // Bus.$emit("end:spinner");
              // console.log("spinner test");
              next();
            })
            .catch(() => {
              console.log("err");
            });
        }, 2000);
        // console.log("to", to);
        // console.log("from", from);
        // console.log("next", next);
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("GET_LIST", to.name)
            .then(() => {
              console.log(2);
              // Bus.$emit("end:spinner");
              console.log("spinner test");
              next();
            })
            .catch(() => {
              console.log("err");
            });
        }, 2000);
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: CreateView("JobsView"),
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("GET_LIST", to.name)
            .then(() => {
              // Bus.$emit("end:spinner");
              console.log("spinner test");
              next();
            })
            .catch(() => {
              console.log("err");
            });
        }, 2000);
      },
    },
    {
      path: "/item/:id",
      name: "item",
      component: ItemView,
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView,
    },
  ],
});
