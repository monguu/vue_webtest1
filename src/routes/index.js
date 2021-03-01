import Vue from "vue";
import VueRouter from "vue-router";
import AskView from "../views/AskView.vue";
import NewsContentView from "../views/NewsContentView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/news",
      component: NewsContentView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/item",
      component: ItemView,
    },
    {
      path: "/user",
      component: UserView,
    },
  ],
});
