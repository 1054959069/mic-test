import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes
});
export default router;
