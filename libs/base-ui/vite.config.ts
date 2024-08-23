/// <reference types='vitest' />

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '../../config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/base-ui',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({ entryRoot: 'src', tsconfigPath: path.join(__dirname, 'tsconfig.lib.json') }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/base-ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'base-ui',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: config.get('build.client.externals'),
    },
  },

  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/base-ui',
      provider: 'v8',
    },
  },
});
