import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '370px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1430px',
        '3xl': '1536px',
      },
      backgroundImage: {
        heroElipsbtn1: "url('/svg/heroElipsbtn1.svg')",
        heroElipsbtn2: "url('/svg/heroElipsbtn2.svg')",
        herobtnbg: "url('/svg/herobtnbg.svg')",
        whatwedobg: "url('/svg/what-we-do-bg.svg')",
        homepagebg: "url('/svg/Homepagebg.svg')",
        teambg: "url('/images/team.png')",
        footer: "url('/images/footerbg.png')",
        sectionBg: "url('/svg/common-section-bg.svg')",
        // homepagebg: "url('/images/homepage.png')",
        'custom-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0) -5.03%, #FFFFFF 54.04%)',
      },
      fontFamily: {
        Inter: ['Inter'],
      },
      colors: {
        darkBlack: '#000000',
        lightBlue: '#1A6AA3',
        charcoalBlue: '#111022',
        lightGray: '#E7E7E7',
        darkGray: '#00000038',
        orange: '#F38F02',
        lightBlack: '#282828',
        gray: '#757474',
        red: '#E94E25',
        primaryGray: '#696969',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'scaleY(0) translateY(10px)', opacity: '0' },
          '100%': { transform: 'scaleY(1) translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
