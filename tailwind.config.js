/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sansSerif: ['Source Sans Pro'],
			mono: ['Source Code Pro'],
			handwriting: ['Kalam', 'cursive']
		},
		extend: {
			colors: {
				blacked: '#0c0a09',
				semiBlacked: '#1c1917',
				greenC: '#22c55e',
				bgrey: '#1a1919'
			},
			gridTemplateColumns: {
				gridTabs: 'repeat(4,1fr)'
			},
			maxWidth: {
				'8xl': '84rem'
			},
			borderWidth: {
				1: '0.5px'
			}
		}
	},
	plugins: []
};
