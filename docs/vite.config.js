import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "vitepress-mermaid-plugin/Mermaid.vue": path.join(
        __dirname,
        "../dist/Mermaid.vue"
      ),
    },
  },
  server: {
    fs: {
      allow: ["../../"],
    },
  },
});
