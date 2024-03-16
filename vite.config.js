import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/AmazonClone/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // build: {
  //   outDir: "build",
  // },
});
