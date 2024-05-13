import router from "@/router";
import type { RouteLocationNormalized } from "vue-router";
// 全局前置守卫
router.beforeEach(async (to: RouteLocationNormalized, from, next) => {
  next();
});
