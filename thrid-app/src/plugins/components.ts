import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
// vant 组件自动按需引入
export default function createViteComponents() {
  return Components({
    dts: "src/typings/components.d.ts",
    resolvers: [VantResolver()]
  });
}
