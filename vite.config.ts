// const path = require("path");
// const { defineConfig } = require("vite");
import path from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/Mermaid.vue",
          dest: "./",
          rename: { stripBase: true },
        },
        {
          src: "src/mermaid.ts",
          dest: "./",
          rename: { stripBase: true },
        },
      ],
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MermaidPlugin",
      fileName: (format: string) =>
        format == "es"
          ? `vitepress-mermaid-plugin.${format}.mjs`
          : `vitepress-mermaid-plugin.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        // "markdown-it",
        // "mermaid",
        // "@mermaid-js/mermaid-mindmap",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
