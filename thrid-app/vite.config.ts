import { defineConfig, loadEnv } from "vite";
import path from "path";
import createVitePlugins from "./src/plugins";
import { createHtmlPlugin } from "vite-plugin-html";
import { enableCDN } from "./build/cdn";

export default defineConfig(config => {
  // 环境变量
  const env = loadEnv(config.mode, __dirname);
  return {
    base: env.VITE_PUBLIC_PATH || "/",
    plugins: [
      ...createVitePlugins(),
      // 注入模板数据
      createHtmlPlugin({
        inject: { data: { ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || "false" } }
      }),
      // 生产环境默认不启用 CDN 加速
      enableCDN(env.VITE_CDN_DEPS)
    ],
    resolve: { alias: { "@": path.resolve("./src") } },
    server: {
      host: "0.0.0.0", //自定义主机名
      port: 3003, //自定义端口
      // 是否开启 https
      https: false,
      cors: true,
      // origin: "http://localhost:3003",
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
    },
    css: {
      preprocessorOptions: {
        less: {
          //全局样式变量引入(结尾;不能少)
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variables.less";'
        }
      }
    },
    build: {
      outDir: "third-app-h5",
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
