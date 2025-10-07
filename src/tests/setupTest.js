import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest'; // ✅ corrected import

afterEach(() => cleanup());

// Polyfill matchMedia for jsdom
globalThis.matchMedia = globalThis.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};
