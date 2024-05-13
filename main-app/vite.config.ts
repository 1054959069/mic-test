import { defineConfig, loadEnv } from "vite";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import { enableCDN } from "./build/cdn";
import vue from "@vitejs/plugin-vue";

export default defineConfig(config => {
  // 环境变量
  const env = loadEnv(config.mode, __dirname);
  return {
    base: "/",
    plugins: [
      vue(),
      // 注入模板数据
      createHtmlPlugin({
        inject: { data: { ENABLE_ERUDA: "false" } }
      }),
      // 生产环境默认不启用 CDN 加速
      enableCDN("false")
    ],
    resolve: { alias: { "@": path.resolve("./src") } },
    server: {
      host: "0.0.0.0", //自定义主机名
      port: 3002, //自定义端口
      // 是否开启 https
      https: false,
      cors: true,
      // origin: "http://localhost:3002",
      proxy: {
        [env.VITE_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    }
  };
});
