// svelte.config.js
// Configures SvelteKit with static adapter and base path.
// Updated to ensure prerendering works for all routes.

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true // Enforce prerendering for all routes.
    }),
    paths: {
      base: '/markdown-converter'
    }
  },
  preprocess: vitePreprocess()
};