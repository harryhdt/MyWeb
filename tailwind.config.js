/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				base: ['']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
