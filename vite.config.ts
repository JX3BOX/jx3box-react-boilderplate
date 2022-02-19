const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      less: {
        globalVars: {
          hack: `true; 
              @import "./node_modules/csslab/base.less";
              @import "./node_modules/@jx3box/jx3box-common/css/var.less";
              @import "./src/assets/less/var.less";`,
        },
      },
    },
  },
  plugins: [react()],
});
