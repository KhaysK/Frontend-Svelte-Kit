import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { terser } from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/Frontend-Svelte-Kit',
		},
		vite: {
			optimizeDeps: {
			  include: ['@emotion/hash']
			},
			plugins: [
				terser({
					compress: {
					  ecma: 2015,
					  pure_getters: true
					},
					module: true,
					toplevel: true
				  }),
				nodeResolve()
			]
		}
	}
};

export default config;