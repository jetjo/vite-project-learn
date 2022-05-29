import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { vueI18nPlugin } from "./plugins/vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueI18nPlugin,
  ],
});
