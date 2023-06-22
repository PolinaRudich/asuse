import ViewTest from "./views/view-test";
//import auth from "./auth";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/home-page-view";
import Profile from "./views/profile-page";
import Tasks from "./views/tasks-page";

import mainLayout from "./layouts/main-layout.vue";
import contextLayout from "./layouts/context-layout.vue";
import simpleLayout from "./layouts/single-card-layout.vue";
import defaultLayout from "@/layouts/default-layout.vue";
import settingsContractLayout from "@/layouts/settings-contract-layout.vue";
import searchSettingsLayout from "@/layouts/search-settings-layout.vue";
import addFolderLayout from "@/layouts/add-folder-layout.vue";
import nsiLayout from "@/layouts/nsi-layout";

function loadView(view) {
  return () => import(/* webpackChunkName: "login" */ `./views/${view}.vue`);
}
const user = "uuu";
const router = new createRouter({
  routes: [
    {
      path: "/home/:id",
      name: "home",
      meta: {
        requiresAuth: false,
        layout: mainLayout,
      },
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        requiresAuth: false,
        layout: contextLayout,
      },
      component: Profile,
    },
    {
      path: "/tasks",
      name: "tasks",
      meta: {
        requiresAuth: false,
        layout: contextLayout,
      },
      component: Tasks,
    },
    {
      path: "/login-form",
      name: "login-form",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Вход",
      },
      component: loadView("login-form"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Внимание!",
      },
      component: loadView("reset-password-form"),
    },
    {
      path: "/contracts-view",
      name: "contracts-view",
      meta: {
        requiresAuth: false,
        layout: defaultLayout,
        title: "Договора",
      },
      component: loadView("contracts-view"),
    },
    {
      path: "/contragents-view",
      name: "contragents-view",
      meta: {
        requiresAuth: false,
        layout: defaultLayout,
        title: "Контрагенты",
      },
      component: loadView("contragents-view"),
    },
    {
      path: "/contract-card-view/:id",
      name: "contract-card-view",
      meta: {
        requiresAuth: false,
        layout: contextLayout,
        title: "Договора",
      },
      component: loadView("contract-card-view"),
    },
    {
      path: "/change-password/:recoveryCode",
      name: "change-password",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Change Password",
      },
      component: loadView("change-password-form"),
    },
    {
      path: "/settings-contract",
      name: "settings-contract",
      meta: {
        requiresAuth: false,
        layout: settingsContractLayout,
        title: "Change Password",
      },
      component: loadView("list-view2"),
    },
    {
      path: "/nsi-layout",
      name: "nsi-layout",
      meta: {
        requiresAuth: false,
        layout: nsiLayout,
        title: "Change Password",
      },
      component: loadView("list-view2"),
    },
    {
      path: "/",
      redirect: `/home/${user}`,
    },
    {
      path: "/recovery",
      redirect: `/home/${user}`,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: `/home/${user}`,
    },
    {
      path: "/view-test",
      name: "view-test",
      meta: {
        requiresAuth: true,
        layout: contextLayout,
      },
      component: ViewTest,
    },
    {
      path: "/search-settings",
      name: "search-settings",
      meta: {
        requiresAuth: false,
        layout: searchSettingsLayout,
      },
      component: loadView("tree-view"),
    },
    {
      path: "/add-folder",
      name: "add-folder",
      meta: {
        requiresAuth: false,
        layout: addFolderLayout,
      },
      component: addFolderLayout,
    },
  ],
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  next();
  //   if (to.name === "login-form" && auth.loggedIn()) {
  //     next({ name: "home" });
  //   }
  //
  //   if (to.matched.some(record => record.meta.requiresAuth)) {
  //     if (!auth.loggedIn()) {
  //       next({
  //         name: "login-form",
  //         query: { redirect: to.fullPath }
  //       });
  //     } else {
  //       next();
  //     }
  //   } else {
  //     next();
  //   }
  //
});

export default router;
