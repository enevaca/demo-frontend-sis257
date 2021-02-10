import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import auth from "../services/AuthDataService";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () =>
      import(/* webpackChunkName: "tasks" */ "../components/task/TaskIndex.vue"),
    children: [
      { path: "create", name: "TaskCreate", component: () => import("../components/task/TaskCreate.vue") },
      { path: "edit/:id", name: "TaskEdit", component: () => import("../components/task/TaskEdit.vue") }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "tasks" */ "../views/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = auth.getUserLogged();

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
