import router from "@/router";

import type { RouteLocationNormalized, RouteLocationRaw } from "vue-router";

interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
  };
}

// 全局前置守卫
router.beforeEach(async (to: toRouteType, from, next) => {
  // 页面 title
  setPageTitle(to.meta.title);
  try {
    next();
  } catch (error) {
    console.log(error);
  }
});

function setPageTitle(title?: string): void {
  window.document.title = title || "开发平台";
}
