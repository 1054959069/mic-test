import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import createAutoImport from "./auto-import";
import createViteComponents from "./components";
import createSvgIcons from "./svg-icon";
import type { PluginOption } from "vite";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";
/**
 * Vite 插件配置中心
 */
export default function createVitePlugins() {
  const plugins: PluginOption[] = [];
  plugins.push(
    vue({
      script: {
        defineModel: true
      }
    })
  );
  plugins.push(vueJsx());
  plugins.push(createSvgIcons()); // svg icon
  plugins.push(createAutoImport()); // 自动导入type
  plugins.push(createViteComponents()); // 按需导入组件
  plugins.push(VueSetupExtend()); // 允许 setup 语法糖上添加组件名属性
  plugins.push(viteCompression()); // 生产环境 gzip 压缩资源
  return plugins;
}
