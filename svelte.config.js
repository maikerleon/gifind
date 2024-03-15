import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
			'$components': './src/components',
			'$icons': './src/components/icons',
		}
  },
  preprocess: vitePreprocess()
};
export default config;