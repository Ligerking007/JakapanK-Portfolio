import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

declare const process: {
  env: {
    VERCEL?: string;
  };
};

const isVercelBuild = process.env.VERCEL === '1';
const productionBasePath = isVercelBuild ? '/' : '/JakapanK-Portfolio/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? productionBasePath : '/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
}));
