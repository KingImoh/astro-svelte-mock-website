import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

import svelte from "@astrojs/svelte";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: nodejs({
    mode: "standalone",
  }),
  integrations: [
    unocss({
      injectReset: true,
    }),
    svelte({ preprocess: [] }),
  ],
});
