import adapter from '@sveltejs/adapter-auto';
import svelteMd from "vite-plugin-svelte-md";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"], // <--
  kit: {
    vite: {
      plugins: [
        svelteMd(), // <--
      ],
    },
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
