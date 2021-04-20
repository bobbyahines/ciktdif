import Vue from "vue";
import VueRouter from "vue-router";
import RouteProps from "./RouteProps";
import ViewTemplate from "../components/ViewTemplate";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: ViewTemplate,
    props: RouteProps.About,
  },
  {
    path: "/cantReturn",
    name: "CantReturn",
    component: ViewTemplate,
    props: RouteProps.CantReturn,
  },
  {
    path: "/contactPlayer",
    name: "Contact",
    component: ViewTemplate,
    props: RouteProps.Contact,
  },
  {
    path: "/start",
    name: "Start",
    component: ViewTemplate,
    props: RouteProps.Start,
  },
  {
    path: "/land",
    name: "Land",
    component: ViewTemplate,
    props: RouteProps.Land,
  },
  {
    path: "/otherPlayers",
    name: "Others",
    component: ViewTemplate,
    props: RouteProps.Others,
  },
  {
    path: "/othersContact",
    name: "OthersContact",
    component: ViewTemplate,
    props: RouteProps.OthersContact,
  },
  {
    path: "/othersName",
    name: "OthersName",
    component: ViewTemplate,
    props: RouteProps.OthersName,
  },
  {
    path: "/keepIt",
    name: "Keep",
    component: ViewTemplate,
    props: RouteProps.Keep,
  },
  {
    path: "/lost",
    name: "Lost",
    component: ViewTemplate,
    props: RouteProps.Lost,
  },
  {
    path: "/dropBox",
    name: "DropBox",
    component: ViewTemplate,
    props: RouteProps.DropBox,
  },
  {
    path: "/dropBoxContact",
    name: "DropBoxContact",
    component: ViewTemplate,
    props: RouteProps.DropBoxContact,
  },
  {
    path: "/returnToDropBox",
    name: "ReturnDropBox",
    component: ViewTemplate,
    props: RouteProps.ReturnDropBox,
  },
  {
    path: "/returnIt",
    name: "Return",
    component: ViewTemplate,
    props: RouteProps.Return,
  },
  {
    path: "/returned",
    name: "Returned",
    component: ViewTemplate,
    props: RouteProps.Returned,
  },
  {
    path: "/water",
    name: "Water",
    component: ViewTemplate,
    props: RouteProps.Water,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
