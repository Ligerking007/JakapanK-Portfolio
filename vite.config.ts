import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/JakapanK-Portfolio/' : '/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
}));
