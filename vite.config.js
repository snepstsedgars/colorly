import { defineConfig } from "vite";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

import Vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js"
    },
  },
  plugins: [
    Vue(),
    VueI18n({
      include: resolve(__dirname, "./src/locales/*.yaml"),
      compositionOnly: true
    }),
    VitePWA({
      manifest: {
        name: "Color converter",
        short_name: "Color converter",
        theme_color: "#212121",
        registerType: "autoUpdate",
        includeAssets: ["/favicon.ico"],
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
      },
    }),
  ],
});
