/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), dts({
    tsconfigPath: "./tsconfig.app.json"
  }), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "metro-ui",
      fileName: "metro-ui",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(glob.sync("src/**/*.{ts,tsx}").map(file => [relative("src", file.slice(0, file.length - extname(file).length)), fileURLToPath(new URL(file, import.meta.url))])),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});