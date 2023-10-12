import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
  theme: {
    colors: {
      primary: "#064B82",
      sec: "#a32c30",
      light: "#DFEAFF",
      lighter: "#EAF1FE",
      bluish: "#F0F2F4",
      whitish: "#F8F8F8",
    },

    fontFamily: {
      primary: "sans-serif",
      outfit: "sans-serif",
    },

    boxShadow: {
      round: "0px 4px 60px -21px rgba(0, 0, 0, 0.25)",
    },
    content: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./node_modules/flowbite/**/*.js",
    ],
  },

  configDeps: ["./my-preset.ts"],

  rules: [],

  shortcuts: [
    [/^area-(.*)$/, ([, v]) => `[grid-area:_${v}]`, { layer: "default" }],
    [
      /^gta-(.*)$/,
      ([, v]) =>
        `[grid-template-areas:_${v
          ?.replace(/-/g, "_")
          .replace(/\|/g, " ")
          .split(" ")
          .map(v => '"' + v + '"')
          .join("_")}]`,
      { layer: "default" },
    ],
  ],

  variants: [],

  preflights: [
    {
      getCSS: () => `
        :root {
          -webkit-tap-highlight-color: transparent;
        }
      `,
    },
  ],

  presets: [
    myPreset,
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        primary: "Satoshi",
        clash: "Clash Display",
        script: "Dancing Script",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
