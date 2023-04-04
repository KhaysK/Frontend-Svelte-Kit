import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import htmlMinifierTerser from 'vite-plugin-html-minifier-terser';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
	plugins: [sveltekit(), htmlMinifierTerser(), nodeResolve()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});
