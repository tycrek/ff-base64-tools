import type { Config } from 'tailwindcss';

export default {
	separator: '_',
	plugins: [],
	content: ['./views/**/*.pug'],
	theme: {
		extend: {
			colors: {
				tycrek: '#FFAA4B',
			}
		}
	}
} satisfies Config;
