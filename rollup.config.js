import sveltePreprocess, {postcss} from 'svelte-preprocess';

import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import dotenv from 'dotenv';
import json from "@rollup/plugin-json";
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { svelteSVG } from "rollup-plugin-svelte-svg";
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

dotenv.config();

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		// eslint-disable-next-line
			if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;

			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true,
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		},
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'wecount',
		file: 'public/build/bundle.js',
	},
	plugins: [
		svelteSVG({
			svgo: {}
		}),
		replace({
			include: ['src/**/*.ts'],
			preventAssignment: true,
			SUPABASE_URL: JSON.stringify(process.env.SUPABASE_URL),
			SUPABASE_PUBLIC_KEY: JSON.stringify(process.env.SUPABASE_PUBLIC_KEY),
			SUPABASE_PRIVATE_KEY: JSON.stringify(process.env.SUPABASE_PRIVATE_KEY),
			SUPABASE_JWT_SECRET: JSON.stringify(process.env.SUPABASE_JWT_SECRET),
		}),
		svelte({
			preprocess: [
				sveltePreprocess({
					postcss: true,
					sourceMap: !production,
				}),
				postcss({
					plugins: [
						require('precss'),
						require('postcss-import'),
						require('postcss-cssnext'),
						require('postcss-nested'),
						require('postcss-preset-env'),
					],
				}),
			],
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
			},
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		css({output: 'bundle.css'}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production,
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		json(),
	],
	watch: {
		clearScreen: false,
	},
};
