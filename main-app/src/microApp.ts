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
// 预加载vite子应用
microApp.preFetch([
  {
    name: "thirdApp",
    url: "https://appcm.kindoucloud.com",
    iframe: true,
    inline: true,
    "disable-patch-request": false,
    level: 3
  }
]);
microApp.router.setBaseAppRouter(router);
