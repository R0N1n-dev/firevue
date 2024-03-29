import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import lightningcss from "vite-plugin-lightningcss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
    lightningcss({
      browserslist: ">= 0.25%",
    }),
  ],
});
