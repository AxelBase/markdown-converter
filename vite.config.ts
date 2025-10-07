// vite.config.js
// Updated to fix deprecated deps.inline warning and ensure Svelte 5 compatibility.

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
    globals: true,
    deps: {
      optimizer: {
        web: {
          include: ['svelte', '@testing-library/svelte']
        }
      }
    },
  },
});