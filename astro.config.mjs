// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// bejamas:astro-fonts:start
/** @type {NonNullable<import("astro/config").AstroUserConfig["fonts"]>} */
const BEJAMAS_ASTRO_FONTS = [
  {
    provider: fontProviders.google(),
    name: "Inter",
    cssVariable: "--font-sans",
    subsets: ["latin"],
  },
  {
    provider: fontProviders.google(),
    name: "Suez One",
    cssVariable: "--font-logo",
    subsets: ["latin"],
  },
  {
    provider: fontProviders.google(),
    name: "Poppins",
    cssVariable: "--font-display",
    subsets: ["latin"],
    weights: ["800", "900"],
  },
  {
    provider: fontProviders.google(),
    name: "Inter Tight",
    cssVariable: "--font-impact",
    subsets: ["latin"],
    weights: ["400", "500", "600", "700"],
  },
];
// bejamas:astro-fonts:end

// https://astro.build/config
export default defineConfig({
  site: "https://jeanreis.dev.br",
  output: "static",
  adapter: vercel(),
  security: { checkOrigin: true },
  fonts: BEJAMAS_ASTRO_FONTS,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
