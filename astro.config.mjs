// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

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
];
// bejamas:astro-fonts:end

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  security: { checkOrigin: true },
  fonts: BEJAMAS_ASTRO_FONTS,
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
