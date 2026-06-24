import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  root: path.resolve(__dirname, "client"),
  server: {
    host: "::",
    port: 8080,
  },
  publicDir: path.resolve(__dirname, "public"),
  build: {
    outDir: path.resolve(__dirname, "dist/spa"),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
    },
  },
});
