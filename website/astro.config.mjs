// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import { loadEnv } from "payload/node";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

loadEnv();

export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        ignored: ["**/node_modules/**", "**/.git/**"],
      },
      hmr: {
        overlay: true,
      },
    },
  },

  integrations: [react()],
});
