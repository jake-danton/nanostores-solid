import { defineConfig } from 'vitest/config';
import solid from 'vite-plugin-solid';

export default defineConfig({
  test: {
    environment: 'jsdom',
    testTransformMode: {
      web: ['/\.[jt]sx?$/'],
    },
    isolate: false,
    setupFiles: ['./vitest.setup.ts'],
  },
  plugins: [solid()],
  resolve: {
    conditions: ['development', 'browser'],
  },
});
