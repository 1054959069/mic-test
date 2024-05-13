const routes = [
  {
    path: "/",
    component: () => import("@/layout/main.vue"),
    name: "main"
  },
  {
    path: "/third-app",
    component: () => import("@/layout/third-app.vue"),
    name: "third-app"
  },
  {
    path: "/test",
    component: () => import("@/layout/test.vue"),
    name: "test"
  }
];

export default routes;
