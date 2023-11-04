import type { Config } from 'tailwindcss';

export default {
	separator: '_',
	plugins: [],
	content: ['./views/**/*.pug'],
	theme: {
		extend: {
		}
	}
} satisfies Config;
