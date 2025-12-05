import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import gridStackC from './tailwind/plugins/grid-stack';

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
        xs: '350px',
        xss: '480px',
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
      backgroundSize: {
        full: '100% 100%',
      },
      backgroundImage: {
        herobtnbg: "url('/svg/herobtnbg.svg')",
        homepagebg: "url('/webp/HeroBanner.webp')",
        homepagebg1: "url('/webp/herobanner1.webp')",
        homepagebg2: "url('/webp/2.webp')",
        homepagebg3: "url('/webp/3.webp')",
        herobg: "url('/webp/herobg.webp')",
        technologbg: "url('/webp/technologyWeWork/technology-we-work-bg.webp')",
        tectnologyContentbg: "url('/webp/technologyWeWork/techContentbg.webp')",
        teambg: "url('/webp/team.webp')",
        footer: "url('/webp/footerbg.webp')",
        contactUs: "url('/images/services/desktop-contactus.webp')",
        careerBanner: "url('/webp/careers/career-banner.webp')",
        exportTeamBg: "url('/webp/about-us/exportTeamBg.webp')",
        aboutUsClient: "url('/svg/about-us/about-shape.svg')",
        projectSectionBg: "url('/webp/projectbg.webp')",
        technology: "url('/webp/technologyBg.webp')",
        healthcarebg: "url('/webp/solution/healthcare.webp')",
        finance: "url('/webp/solution/finance.webp')",
        logistic: "url('/webp/solution/Logistics.webp')",
        education: "url('/webp/solution/education.webp')",
        realEstate: "url('/webp/solution/realEstate.webp')",
        retail: "url('/webp/solution/retail.webp')",
        EllipseTechnology: "url('/webp/EllipseTechnology.webp')",
        PrivacyPolicy: "url('/webp/privacy-policy.webp')",
        siteMap: "url('/webp/site-map.webp')",
        'case-study': "url('/webp/case-study/case-study.webp')",
        'custom-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) -5.03%, #000000 54.04%)',
        'hero-overlap':
          'linear-gradient(73.24deg, rgba(255, 255, 255, 0) 44.98%, rgba(255, 255, 255, 0.8) 76.91%)',
        'export-team-gradient':
          'linear-gradient(170.88deg, #004372 8.79%, #02ADE1 50.73%)',
        'card-1': "url('/webp/homePagev2/card-1.webp')",
        'card-2': "url('/webp/homePagev2/card-2.webp')",
        'card-3': "url('/webp/homePagev2/card-3.webp')",
        'tech-we-work': "url('/webp/homePagev2/tech-we-work.webp')",
        overly: "url('/webp/homePagev2/overly.webp')",
        'project-bg': "url('/images/homePagev2/project.png')",
        line: "url('/images/homePagev2/Line.png')",
        contact: "url('/webp/homePagev2/contact-us-v2.webp')",
        'our-expertise': "url('/webp/homePagev2/our-expertise.webp')",
        footerv2: "url('/images/homePagev2/footer.png')",
        heroBg: "url('/images/homePagev2/circuit.svg')",
        aboutUsHeroBg: "url('/webp/about-us/about_us.webp')",
        contactUsBg: "url('/webp/our-work/contact-us-frame.webp')",
        benefits: "url('/images/benefits.png')",
        bgHealthCare: "url('/images/services/healthcare.jpg')",
        bgContact: "url('/webp/services/contact-us.webp')",
        contactMobileBg: "url('/images/services/mobile-contactus.webp')",
        detailHeroGradient:
          ' linear-gradient(176.48deg, #41D1FF 11.59%, #034C63 38.07%);',
        frame: "url('/images/our-work/frame.png')",
        userframe: "url('/images/our-work/users.jpg')",
        scheduleCall:
          'linear-gradient(289.62deg, #02ADE1 6.97%, #1A6AA3 94.65%)',
        leftCard:
          'linear-gradient(192.59deg, rgba(20, 17, 45, 0.082) 2.01%, rgba(12, 50, 59, 0.82) 96.5%)',
        rightCard:
          'linear-gradient(192.59deg, rgba(12, 50, 59, 0.82) 2.01%, rgba(20, 17, 45, 0.082) 96.5%);',
        gradientLine: 'linear-gradient(#fffc,#0000)',
        btnGradientBg: "url('/svg/about-us/ptwbg.svg')",
      },
      fontFamily: {
        opt: ['var(--font-opt)'],
        dmSans: ['var(--font-dmSans)'],
      },
      colors: {
        primary: '#0A081B',
        secondary: '#41494D',
        subtle: '#9CA5A9',
        iconSubtle: '#131313',
        primarySubtle: '#7B8589',
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
        optDesc: '#3B5068',
        black: {
          DEFAULT: '#000000',
          900: {
            alpha: 'rgba(19, 19, 19, 0.9)',
          },
          750: {
            alpha: 'rgba(19, 19, 19, 0.7)',
          },
          500: {
            alpha: 'rgba(19, 19, 19, 0.5)',
          },
          250: {
            alpha: 'rgba(19, 19, 19, 0.3)',
          },
          100: {
            alpha: 'rgba(19, 19, 19, 0.1)',
          },
        },
      },
      boxShadow: {
        'work-card': '0px 7px 14px 0px #F4F2EF',
        card: '0px 0px 23.7px 0px #00000030',
        custom:
          '0px 1.41px 2.83px -1.41px #0000001A, 0px 1.41px 4.24px 0px #0000001A, 0px 0px 0px 1.41px #1313160D',
        client: '0px 0px 0px 1.41px #0000001A inset',
        tab: ' 0px 1.41px 2.83px -1.41px #0000001A,0px 1.41px 4.24px 0px #0000001A,0px 0px 0px 1.41px #1313160D;',
        'how-work-card': '0px 8px 24px 0px #1212121A',
        default:
          '0 8px 24px -12px #0a39801a,0 12px 16px -8px #0a398014,0 8px 10px -6px #0a39800d',
        devCardShadow: '0px 0px 23.7px 0px #0000000D',
        ourIndustries:
          '0px 1.41px 2.83px -1.41px #0000001A,0px 1.41px 4.24px 0px #0000001A,0px 0px 0px 1.41px #1313160D',
        howWorkCard: '0px 8px 24px 0px #1212121A',
        WhatWeDo: `0 2px 4px rgba(0, 0, 0, 0.08)`,
        shadowCaptcha: '0px 0px 5.56px 1.39px #00000014',
      },
    },
  },
  plugins: [nextui(), gridStackC],
} satisfies Config;
