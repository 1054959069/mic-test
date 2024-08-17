import router from "./router";
// 微应用注册信息
import microApp from "@micro-zoe/micro-app";

microApp.start({
  prefetchDelay: 800,
  lifeCycles: {
    created(_: CustomEvent) {
      console.log("created");
    },
    mounted(_: CustomEvent) {
      console.log("mounted");
    },
    error(e: CustomEvent) {
      console.log("error", e);
    }
  }
});
microApp.router.setBaseAppRouter(router);
