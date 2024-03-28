import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-primevue-resolver";
import AutoImport from "unplugin-auto-import/vite";
import lightningcss from "vite-plugin-lightningcss";
import TurboConsole from "unplugin-turbo-console/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
    TurboConsole(),
    lightningcss({
      browserslist: ">= 0.25%",
    }),
  ],
});
