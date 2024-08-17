import type { Options } from "unplugin-auto-import/types";
import autoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function createAutoImport(options?: Options | undefined) {
  return autoImport({
    imports: ["vue", "vue-router"],
    dts: "src/typings/auto-imports.d.ts",
    resolvers: [ElementPlusResolver()],
    eslintrc: {
      enabled: true,
      filepath: "./.eslintrc-auto-import.json",
      globalsPropValue: true
    },
    ...options
  });
}
