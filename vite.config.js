import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$js': path.resolve('./src/js'),
			'$store': path.resolve('./src/store'),
			'$type': path.resolve('./src/type')
		}
	}
};

export default config;
