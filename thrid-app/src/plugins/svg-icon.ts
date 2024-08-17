// 引入svg
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default function createSvgIcons() {
  return createSvgIconsPlugin({
    //svg插件
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    symbolId: "icon-[dir]-[name]"
  });
}
