import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Books from "views/pages/Books.js";
import Securities from "views/pages/Securities.js"
import Trades from "views/pages/Trades.js"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Books,
    layout: "/admin",
  },
  {
    path: "/security",
    name: "Securities",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Securities,
    layout: "/admin",
  },
  // {
  //   path: "/trade",
  //   name: "Trades",
  //   icon: "ni ni-bullet-list-67 text-blue",
  //   component: Trades,
  //   layout: "/admin",
  // },
  // {
  //   path: "/hello",
  //   name: "Dashboard Temp",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
