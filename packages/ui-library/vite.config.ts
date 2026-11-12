import vue from "@vitejs/plugin-vue";
import Vue from "unplugin-vue/rolldown";
import { defineConfig } from "vite-plus";

export default defineConfig({
  // Used by Histoire, which reads this file for its Vite config.
  plugins: [vue()],
  pack: {
    plugins: [Vue({ isProduction: true })],
    dts: {
      tsgo: true,
    },
    exports: true,
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {},
  test: {
    environment: "jsdom",
  },
});
