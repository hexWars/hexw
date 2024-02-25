import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hexw.zeabur.app",
  integrations: [
    react(),
    tailwind(
      { applyBaseStyles: false, }
    ),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "catppuccin-mocha",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Plugins
      remarkPlugins: []
    }
  }
});