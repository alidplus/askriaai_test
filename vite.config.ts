import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from "module"
import { fileURLToPath, URL } from 'node:url'
import ViteYaml from '@modyfi/vite-plugin-yaml';

const require = createRequire(import.meta.url)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteYaml(),
    react()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      fs: require.resolve("rollup-plugin-node-builtins"),
      process: require.resolve("rollup-plugin-node-builtins"),
      child_process: require.resolve("rollup-plugin-node-builtins"),
      // tslib: 'tslib/tslib.es6.js'
    },
  },
})
