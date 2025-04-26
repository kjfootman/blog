// import { sveltekit } from '@sveltejs/kit/node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: [
			"D:/workspace/svelte/blog/node_modules/.vite/deps/chunk-6FCZEMHD.js?v=3f9fbe49",
			"D:/workspace/svelte/blog/node_modules/.vite/deps/chunk-KTP3TDPN.js?v=84e1820c"
		]
	}
});
