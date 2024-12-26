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
        xxl: '1365px',
        '3xl': '1430px',
        '4xl': '1536px',
        '5xl': '1679px',

        // 1366 1440 1400 1600
      },
      backgroundImage: {
        heroElipsbtn1: "url('/svg/heroElipsbtn1.svg')",
        heroElipsbtn2: "url('/svg/heroElipsbtn2.svg')",
        herobtnbg: "url('/svg/herobtnbg.svg')",
        whatwedobg: "url('/svg/what-we-do-bg.svg')",
        homepagebg: "url('/webp/hero-banner.webp')",
        herobg: "url('/webp/herobg.webp')",
        technologbg: "url('/webp/technology-we-work-bg.webp')",
        tectnologyContentbg: "url('/images/footer/footerbg.png')",
        teambg: "url('/images/team.png')",
        footer: "url('/webp/footerbg.webp')",
        sectionBg: "url('/svg/common-section-bg.svg')",
        'custom-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) -5.03%, #000000 54.04%)',
        'hero-overlap':
          'linear-gradient(73.24deg, rgba(255, 255, 255, 0) 44.98%, rgba(255, 255, 255, 0.8) 76.91%)',
      },
      fontFamily: {
        Inter: ['Inter'],
        Poppins: ['Poppins'],
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
        turquoise: '#2bbada1a',
        cyanBlue: '#02ADE1',
        grayishBlue: '#1110221f',
        bluishGray: '#1110221a',
        secGray: '#CCCCCC',
        mediumGray: '#8A8A8A',
        secBlack: '#0F0F0F',
        lightSilver: '#D4D4D4',
        graphite: '#636363',
        lavenderGray: '#888790',
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
