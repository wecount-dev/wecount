import {defineConfig} from 'vite';
import preprocess from 'svelte-preprocess';
import routify from '@roxi/routify/vite-plugin';
import {svelte} from '@sveltejs/vite-plugin-svelte';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
  clearScreen: false,
  server: {port: 1337},
  plugins: [
    routify(),
    svelte({
      emitCss: false,
      compilerOptions: {dev: !production},
      extensions: ['.svelte'],
      preprocess: preprocess({
        postcss: true,
        sourceMap: !production,
      }),
      hot: !production,
    }),
  ],
});
