import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes:{
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1500px)' },
        }
      },
      colors:{
        primaryColor:{
          100: '#efd76d',
          200: '#fce372',
          300: '#cca59a',
      },
      others: {
        100: "#f37449",
        200: "#a385bd",
      },
    },
    },
    fontFamily: {
      primaryFont: ['Twentieth Century', 'sans-serif'],
      secondaryFont: ['Raisonne', 'sans-serif']
    }
  },
  plugins: [],
}
export default config
