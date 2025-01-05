import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
      extensions: [{
        npmPackageName: 'vite-plugin-ssr',
        pageFilesSrc: '/page/*'
      }]
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "$/lib": path.resolve(__dirname, "./src/lib"),
      "$": path.resolve(__dirname, "./src")
    },
  },
}));