import { IPropsDataTypes } from '@/components/type/type';
import framework from '../../../../../../public/svg/technology/mobile/framework.svg';
import tools from '../../../../../../public/svg/technology/mobile/tools-utilities.svg';
import database from '../../../../../../public/svg/technology/mobile/database.svg';
import plugin from '../../../../../../public/svg/technology/mobile/plugin.svg';
import dns from '../../../../../../public/svg/technology/mobile/dns.svg';
import nda from '../../../../../../public/svg/services/nda.svg';
import hiringModal from '../../../../../../public/svg/services/hiring-models.svg';
import refundPolicy from '../../../../../../public/svg/services/refund-policy.svg';
import resource from '../../../../../../public/svg/services/resource.svg';

export const wordpress: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">WordPress</span> Development Company`,
    techName: 'WordPress',
    description: `Optimity Logics is a trusted WordPress development company delivering
scalable, secure, and high-performing websites. Our WordPress experts build custom
themes, plugins, and enterprise-grade solutions tailored to your business goals.`,
    techImg: '/webp/technology/cms/wordpress.webp',
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our WordPress</span> Development
            Services Aligned with Your Needs`,
    description: `From business websites to enterprise CMS solutions, our
WordPress development services are designed to deliver flexibility,
performance, and growth.`,
    developmentServices: [
      {
        title: 'Custom WordPress Development',
        description:
          'We build tailor-made WordPress websites and solutions aligned with your brand and business requirements.',
      },
      {
        title: 'WordPress Theme Development',
        description:
          'Custom, responsive, and SEO-friendly WordPress themes designed for performance and usability.',
      },
      {
        title: 'WordPress Plugin Development',
        description:
          'Feature-rich custom plugins to extend WordPress functionality and meet unique business needs.',
      },
      {
        title: 'WooCommerce Development',
        description:
          'Scalable WooCommerce solutions for secure and high-converting eCommerce experiences.',
      },
      {
        title: 'WordPress Migration & Upgrade',
        description:
          'Seamless migration from other platforms and safe WordPress version upgrades.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Ongoing updates, security monitoring, performance optimization, and technical support.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for WordPress Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'WordPress Expertise',
        content: {
          heading: 'Experienced WordPress professionals',
          desc: `Our developers have extensive experience building
custom WordPress solutions across industries.`,
          points: [
            'Clean and scalable code',
            'Custom themes & plugins',
            'SEO-friendly architecture',
            'Performance optimization',
          ],
        },
      },
      {
        id: 2,
        title: 'Agile & Transparent Process',
        content: {
          heading: 'Clear communication and faster delivery',
          desc: `We follow agile methodologies to ensure flexibility,
visibility, and on-time project execution.`,
          points: [
            'Sprint-based development',
            'Regular progress updates',
            'Flexible engagement models',
          ],
        },
      },
      {
        id: 3,
        title: 'Secure & Scalable Solutions',
        content: {
          heading: 'Built for long-term growth',
          desc: `Our WordPress solutions follow best security
practices and scalable architecture.`,
          points: [
            'Secure coding standards',
            'Optimized performance',
            'Future-ready solutions',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> powerful WordPress website </span>?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated WordPress experts' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Risk-free engagement*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> WordPress </span>
            Development Process`,
    description: `Our structured WordPress development process ensures
quality delivery and scalable results.`,
    developmentProcessStep: [
      {
        title: 'Requirement Discovery',
        description:
          'We understand your business goals, target audience, and website requirements.',
      },
      {
        title: 'Design & Architecture',
        description:
          'We design intuitive UI and a robust WordPress architecture for performance and scalability.',
      },
      {
        title: 'Development & Testing',
        description:
          'Custom theme and plugin development with rigorous testing for quality and security.',
      },
      {
        title: 'Deployment & Support',
        description:
          'Smooth deployment with ongoing maintenance, updates, and performance monitoring.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A snapshot of WordPress solutions we’ve delivered
for businesses across industries.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Custom WordPress website with optimized performance.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Enterprise WordPress CMS solution.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `WooCommerce-powered WordPress platform.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Learning platform built on WordPress.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Scalable WordPress rental website.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `High-performance WordPress business website.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> WordPress Development</span>`,
    description: `Our WordPress developers use modern tools and
technologies to deliver reliable solutions.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Core Technologies',
        servicesImg: framework,
        servicesItems: ['WordPress', 'PHP', 'REST API'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: ['VS Code', 'Git', 'WP-CLI'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'MariaDB'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Plugins & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'WooCommerce',
          'Yoast SEO',
          'Advanced Custom Fields',
          'Elementor',
          'Payment Gateways',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'Hosting & DevOps',
        servicesImg: dns,
        servicesItems: ['AWS', 'cPanel', 'Cloudflare', 'CI/CD'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Common questions about WordPress development.',
    faqs: [
      {
        question: 'Why choose WordPress for website development?',
        answer:
          'WordPress is flexible, scalable, SEO-friendly, and powers over 40% of the web.',
      },
      {
        question: 'Do you build custom WordPress themes and plugins?',
        answer:
          'Yes, we specialize in custom themes and plugins tailored to your needs.',
      },
      {
        question: 'Can you migrate my existing website to WordPress?',
        answer:
          'Yes, we provide secure and seamless WordPress migration services.',
      },
      {
        question: 'Is WordPress secure for business websites?',
        answer:
          'Yes, with proper security practices, WordPress is highly secure and reliable.',
      },
      {
        question: 'Do you offer ongoing WordPress support?',
        answer: 'Yes, we provide continuous maintenance, updates, and support.',
      },
    ],
  },
};

export const contentful: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Contentful</span> Development Company`,
    techName: 'Contentful',
    description: `Optimity Logics is a trusted Contentful development company delivering
scalable, API-driven, and future-ready headless CMS solutions. Our Contentful experts
help businesses build flexible digital experiences across web, mobile, and omnichannel
platforms.`,
    techImg: '/webp/technology/cms/c.webp',
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Contentful</span> Development
            Services Aligned with Your Needs`,
    description: `Whether you need a headless CMS, omnichannel content platform,
or a Contentful-powered website or app, our experts deliver scalable
and high-performance solutions.`,
    developmentServices: [
      {
        title: 'Contentful CMS Implementation',
        description:
          'End-to-end Contentful setup, configuration, and architecture tailored to your business needs.',
      },
      {
        title: 'Headless CMS Development',
        description:
          'API-first headless CMS solutions enabling seamless content delivery across platforms.',
      },
      {
        title: 'Contentful Website Development',
        description:
          'High-performance websites integrated with Contentful and modern frontend frameworks.',
      },
      {
        title: 'Content Modeling & Migration',
        description:
          'Structured content modeling and secure migration from legacy CMS platforms to Contentful.',
      },
      {
        title: 'Contentful Integrations',
        description:
          'Third-party integrations including CRM, eCommerce, analytics, and marketing tools.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Ongoing Contentful support, optimization, and performance monitoring.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Contentful Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Headless CMS Expertise',
        content: {
          heading: 'Experienced Contentful specialists',
          desc: `Our team has deep expertise in designing and delivering
headless CMS solutions using Contentful.`,
          points: [
            'API-first architecture',
            'Scalable content models',
            'Omnichannel delivery',
            'Best practices implementation',
          ],
        },
      },
      {
        id: 2,
        title: 'Agile & Transparent Process',
        content: {
          heading: 'Faster delivery with full visibility',
          desc: `We follow agile methodologies ensuring flexibility,
clear communication, and timely delivery.`,
          points: [
            'Sprint-based execution',
            'Regular updates',
            'Flexible engagement models',
          ],
        },
      },
      {
        id: 3,
        title: 'Secure & Future-Ready Solutions',
        content: {
          heading: 'Built for performance and growth',
          desc: `Our Contentful solutions are secure, scalable,
and ready for future expansion.`,
          points: [
            'Secure API integrations',
            'High performance',
            'Cloud-native architecture',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> headless CMS solution </span> using Contentful?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated Contentful experts' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Risk-free engagement*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Contentful </span>
            Development Process`,
    description: `Our structured Contentful development process ensures
scalable, flexible, and high-performing digital solutions.`,
    developmentProcessStep: [
      {
        title: 'Discovery & Planning',
        description:
          'We analyze your content needs, business goals, and digital ecosystem.',
      },
      {
        title: 'Content Modeling & Architecture',
        description:
          'We design structured content models and API-driven architecture in Contentful.',
      },
      {
        title: 'Development & Integration',
        description:
          'We integrate Contentful with frontend frameworks and third-party services.',
      },
      {
        title: 'Testing, Deployment & Support',
        description:
          'We ensure smooth deployment with continuous monitoring and support.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of Contentful-powered solutions delivered
for global businesses.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Headless CMS-powered content platform using Contentful.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Enterprise Contentful CMS implementation.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Contentful-driven omnichannel platform.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Scalable learning platform built with Contentful.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Modern headless CMS solution using Contentful.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `High-performance Contentful-powered website.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Contentful Development</span>`,
    description: `Tools and technologies our Contentful experts
use to build modern digital experiences.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'CMS & APIs',
        servicesImg: framework,
        servicesItems: ['Contentful', 'Contentful APIs', 'GraphQL'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frontend Frameworks',
        servicesImg: tools,
        servicesItems: ['Next.js', 'React', 'Vue.js'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['Contentful CDN', 'Cloud Storage'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Ecommerce platforms',
          'CRM tools',
          'Analytics tools',
          'Marketing automation',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Hosting',
        servicesImg: dns,
        servicesItems: ['AWS', 'Vercel', 'Netlify', 'CI/CD'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Common questions about Contentful development.',
    faqs: [
      {
        question: 'What is Contentful?',
        answer:
          'Contentful is a headless CMS that allows flexible, API-driven content delivery.',
      },
      {
        question: 'Why choose Contentful over traditional CMS?',
        answer:
          'Contentful enables omnichannel delivery, scalability, and faster development.',
      },
      {
        question: 'Can Contentful be integrated with frontend frameworks?',
        answer:
          'Yes, Contentful integrates seamlessly with React, Next.js, Vue, and more.',
      },
      {
        question: 'Do you offer Contentful migration services?',
        answer:
          'Yes, we migrate content securely from legacy CMS platforms to Contentful.',
      },
      {
        question: 'Do you provide ongoing Contentful support?',
        answer:
          'Yes, we offer continuous maintenance, optimization, and support services.',
      },
    ],
  },
};

export const craftCms: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Craft CMS</span> Development Company`,
    techName: 'Craft CMS',
    description: `Optimity Logics is a trusted Craft CMS development company delivering flexible, scalable, and content-first digital solutions. Our expert Craft CMS developers build custom websites and applications that offer complete control, high performance, and seamless content management tailored to your business needs.`,
    techImg: '/webp/technology/cms/cc.webp',
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Craft CMS</span> Development Services`,
    description: `From custom website development to enterprise-grade content platforms, we provide end-to-end Craft CMS solutions that are secure, scalable, and easy to manage.`,
    developmentServices: [
      {
        title: 'Custom Craft CMS Development',
        description:
          'We build tailor-made Craft CMS websites with flexible content modeling, custom fields, and scalable architectures aligned with your business goals.',
      },
      {
        title: 'Craft CMS Website Design',
        description:
          'Our designers create clean, modern, and conversion-focused UI/UX designs that integrate seamlessly with Craft CMS.',
      },
      {
        title: 'Craft CMS Plugin Development',
        description:
          'We develop custom Craft CMS plugins to extend functionality and meet unique business requirements.',
      },
      {
        title: 'Craft CMS Migration Services',
        description:
          'Seamlessly migrate your existing website from WordPress, Drupal, or other CMS platforms to Craft CMS without data loss.',
      },
      {
        title: 'Craft CMS Maintenance & Support',
        description:
          'We provide ongoing maintenance, performance optimization, updates, and security monitoring for Craft CMS projects.',
      },
      {
        title: 'Headless Craft CMS Solutions',
        description:
          'Leverage Craft CMS as a headless CMS integrated with modern frontend frameworks for omnichannel content delivery.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Craft CMS Development?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Craft CMS Expertise',
        content: {
          heading:
            'Experienced Craft CMS developers with deep platform knowledge',
          desc: `Our team specializes in Craft CMS architecture, custom fields, sections, and plugin development to deliver robust and flexible solutions.`,
          points: [
            'Certified Craft CMS developers',
            'Clean and scalable codebase',
            'Best practices implementation',
            'Performance-focused builds',
          ],
        },
      },
      {
        id: 2,
        title: 'Custom & Scalable Solutions',
        content: {
          heading: 'Tailored solutions designed for long-term growth',
          desc: `We don’t use templates. Every Craft CMS project is custom-built to scale with your business needs.`,
          points: [
            'Custom content modeling',
            'Scalable architecture',
            'Future-ready solutions',
          ],
        },
      },
      {
        id: 3,
        title: 'Transparent Process',
        content: {
          heading: 'Clear communication and full project visibility',
          desc: `We follow a transparent development process with regular updates, milestones, and clear deliverables.`,
          points: [
            'Dedicated project manager',
            'Agile development approach',
            'On-time delivery',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking for a flexible and powerful <span class="text-red capitalize">CMS solution</span> with Craft CMS?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: 'Dedicated Craft CMS experts',
    },
    {
      img: hiringModal,
      title: 'Flexible engagement models',
    },
    {
      img: refundPolicy,
      title: 'Risk-free development approach',
    },
  ],

  developmentProcess: {
    heading: `<span class="text-red">Craft CMS</span> Development Process`,
    description: `Our structured Craft CMS development process ensures clarity, quality, and timely delivery.`,
    developmentProcessStep: [
      {
        title: 'Discovery & Requirement Analysis',
        description:
          'We understand your business goals, content structure, and technical requirements to define a clear project scope.',
      },
      {
        title: 'Information Architecture & UX Design',
        description:
          'We design content models, user journeys, and intuitive interfaces optimized for usability and scalability.',
      },
      {
        title: 'Craft CMS Development',
        description:
          'Our developers build custom templates, fields, and plugins using Craft CMS best practices.',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'We rigorously test functionality, performance, and security to ensure a flawless experience.',
      },
      {
        title: 'Deployment & Ongoing Support',
        description:
          'We deploy your Craft CMS project and provide continuous support, updates, and optimization.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of our successful CMS and web development projects.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'A custom Craft CMS website with dynamic content management and performance optimization.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'Enterprise-level CMS solution built using Craft CMS for scalability and flexibility.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'Modern content-driven platform powered by Craft CMS and custom UI.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use for <span class="text-red">Craft CMS Development</span>`,
    description: `Tools and technologies our Craft CMS experts rely on.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'CMS & Backend',
        servicesImg: framework,
        servicesItems: ['Craft CMS', 'PHP', 'Yii Framework'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frontend',
        servicesImg: tools,
        servicesItems: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'PostgreSQL'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST APIs',
          'Third-party services',
          'Payment gateways',
          'CRM integrations',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Tools',
        servicesImg: dns,
        servicesItems: ['Git', 'Docker', 'CI/CD Pipelines', 'AWS'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Answers to common questions about Craft CMS development.',
    faqs: [
      {
        question: 'Why choose Craft CMS over WordPress?',
        answer:
          'Craft CMS offers greater flexibility, security, and content control compared to traditional CMS platforms like WordPress.',
      },
      {
        question: 'Is Craft CMS suitable for enterprise projects?',
        answer:
          'Yes, Craft CMS is highly scalable and ideal for enterprise-grade websites and content platforms.',
      },
      {
        question: 'Can you migrate my existing website to Craft CMS?',
        answer:
          'Absolutely. We provide seamless migration services from WordPress, Drupal, and other CMS platforms.',
      },
      {
        question: 'Do you offer ongoing Craft CMS support?',
        answer:
          'Yes, we provide maintenance, updates, performance optimization, and long-term support.',
      },
    ],
  },
};

export const magento: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Magento</span> Development Company`,
    techName: 'Magento',
    description: `Optimity Logics is a reliable Magento (Adobe Commerce) development company delivering scalable, secure, and high-performance eCommerce solutions. Our experienced Magento developers build feature-rich online stores tailored to your business goals, from custom store development to enterprise-level commerce solutions.`,
    techImg: '/webp/technology/cms/m.webp',
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Magento</span> Development Services`,
    description: `Whether you need a new Magento store, a migration, or performance optimization, we provide end-to-end Magento development services to support your eCommerce growth.`,
    developmentServices: [
      {
        title: 'Custom Magento Store Development',
        description:
          'We build fully customized Magento stores with scalable architecture, tailored features, and seamless user experiences.',
      },
      {
        title: 'Magento Theme Design & Customization',
        description:
          'Our designers create conversion-focused, responsive Magento themes aligned with your brand identity.',
      },
      {
        title: 'Magento Extension Development',
        description:
          'We develop custom Magento extensions to add advanced functionality and meet specific business requirements.',
      },
      {
        title: 'Magento Migration Services',
        description:
          'Smooth and secure migration from Shopify, WooCommerce, or legacy platforms to Magento without data loss.',
      },
      {
        title: 'Magento Performance Optimization',
        description:
          'We optimize speed, performance, and scalability to ensure fast load times and better conversions.',
      },
      {
        title: 'Magento Support & Maintenance',
        description:
          'Ongoing maintenance, security updates, and technical support to keep your Magento store running smoothly.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Magento Development?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Magento Expertise',
        content: {
          heading:
            'Certified Magento developers with deep eCommerce experience',
          desc: `Our team specializes in Magento architecture, custom modules, and enterprise-grade eCommerce solutions.`,
          points: [
            'Certified Magento developers',
            'Clean & scalable code',
            'Adobe Commerce expertise',
            'Best security practices',
          ],
        },
      },
      {
        id: 2,
        title: 'Scalable eCommerce Solutions',
        content: {
          heading: 'Built to grow with your business',
          desc: `We design Magento solutions that scale effortlessly as your traffic, products, and customers grow.`,
          points: [
            'High-performance architecture',
            'Future-ready solutions',
            'Multi-store & multi-language support',
          ],
        },
      },
      {
        id: 3,
        title: 'Transparent Development Process',
        content: {
          heading: 'Clear communication and full visibility',
          desc: `We follow an agile, transparent process with regular updates and milestone-based delivery.`,
          points: [
            'Dedicated project manager',
            'Agile methodology',
            'On-time delivery',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a powerful <span class="text-red capitalize">Magento eCommerce store</span>?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: 'Dedicated Magento developers',
    },
    {
      img: hiringModal,
      title: 'Flexible engagement models',
    },
    {
      img: refundPolicy,
      title: 'Risk-free development approach',
    },
  ],

  developmentProcess: {
    heading: `<span class="text-red">Magento</span> Development Process`,
    description: `Our proven Magento development process ensures quality, scalability, and timely delivery.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis & Planning',
        description:
          'We analyze business goals, product catalog, and user journeys to define a clear development roadmap.',
      },
      {
        title: 'UX/UI Design',
        description:
          'We design intuitive, conversion-focused interfaces optimized for eCommerce experiences.',
      },
      {
        title: 'Magento Development & Integration',
        description:
          'Custom Magento development including themes, modules, third-party integrations, and APIs.',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'We conduct performance, security, and functional testing to ensure a flawless shopping experience.',
      },
      {
        title: 'Deployment & Ongoing Support',
        description:
          'Store deployment, monitoring, maintenance, and continuous improvements post-launch.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A snapshot of our successful eCommerce and CMS projects.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'Custom Magento-powered eCommerce platform with optimized performance.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'Enterprise Magento solution with advanced product and order management.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'Scalable Magento store designed for high traffic and conversions.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use for <span class="text-red">Magento Development</span>`,
    description: `Tools and technologies our Magento experts work with.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Platform & Backend',
        servicesImg: framework,
        servicesItems: [
          'Magento Open Source',
          'Adobe Commerce',
          'PHP',
          'MySQL',
        ],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frontend',
        servicesImg: tools,
        servicesItems: ['HTML5', 'CSS3', 'JavaScript', 'Knockout.js', 'React'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'MariaDB'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Payment Gateways',
          'Shipping APIs',
          'ERP & CRM Integrations',
          'Third-party APIs',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Tools',
        servicesImg: dns,
        servicesItems: ['Git', 'Docker', 'CI/CD', 'AWS', 'Cloud Hosting'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Common questions about Magento development services.',
    faqs: [
      {
        question: 'Why choose Magento for eCommerce?',
        answer:
          'Magento offers unmatched flexibility, scalability, and customization for growing eCommerce businesses.',
      },
      {
        question: 'Is Magento suitable for enterprise businesses?',
        answer:
          'Yes, Adobe Commerce (Magento) is widely used by enterprise-level brands worldwide.',
      },
      {
        question: 'Can you migrate my existing store to Magento?',
        answer:
          'Yes, we provide secure and seamless migration from other platforms to Magento.',
      },
      {
        question: 'Do you provide ongoing Magento support?',
        answer:
          'Absolutely. We offer maintenance, security updates, and performance optimization.',
      },
    ],
  },
};

export const drupal: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Drupal</span> Development Company`,
    techName: 'drupal',
    description: `Optimity Logics is a trusted Drupal development company delivering secure, scalable, and high-performance CMS solutions. Our Drupal experts build flexible digital platforms, enterprise websites, and content-rich applications tailored to complex business requirements.`,
    techImg: '/webp/technology/cms/drupal.webp',
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Drupal</span> Development Services`,
    description: `From custom Drupal websites to enterprise-grade CMS platforms, we provide end-to-end Drupal development services to help organizations manage content, scale efficiently, and deliver exceptional digital experiences.`,
    developmentServices: [
      {
        title: 'Custom Drupal Website Development',
        description:
          'We build scalable and secure Drupal websites tailored to your business, content, and user needs.',
      },
      {
        title: 'Drupal Theme Design & Development',
        description:
          'Our designers craft responsive, accessible, and conversion-focused Drupal themes aligned with your brand.',
      },
      {
        title: 'Drupal Module Development',
        description:
          'We develop custom Drupal modules to extend functionality and integrate third-party services.',
      },
      {
        title: 'Drupal Migration & Upgrade',
        description:
          'Seamless migration and upgrades from older Drupal versions or other CMS platforms with zero data loss.',
      },
      {
        title: 'Enterprise Drupal Solutions',
        description:
          'Robust Drupal solutions for large-scale, high-traffic, and content-heavy enterprise applications.',
      },
      {
        title: 'Drupal Support & Maintenance',
        description:
          'Ongoing maintenance, security updates, performance optimization, and technical support.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Drupal Development?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Drupal Expertise',
        content: {
          heading: 'Experienced Drupal developers you can trust',
          desc: `Our team has deep expertise in Drupal architecture, security, and enterprise CMS implementations.`,
          points: [
            'Certified Drupal developers',
            'Enterprise-grade solutions',
            'Security-first development',
            'Clean and scalable code',
          ],
        },
      },
      {
        id: 2,
        title: 'Scalable & Secure Platforms',
        content: {
          heading: 'Built for performance and growth',
          desc: `We design Drupal platforms that handle high traffic, complex content structures, and evolving business needs.`,
          points: [
            'High scalability',
            'Advanced access control',
            'Performance optimization',
          ],
        },
      },
      {
        id: 3,
        title: 'Transparent Process',
        content: {
          heading: 'Clear communication and agile delivery',
          desc: `We follow an agile, transparent development process with regular updates and measurable milestones.`,
          points: [
            'Agile methodology',
            'Dedicated project manager',
            'On-time delivery',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a powerful <span class="text-red capitalize">Drupal CMS platform</span>?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: 'Dedicated Drupal developers',
    },
    {
      img: hiringModal,
      title: 'Flexible engagement models',
    },
    {
      img: refundPolicy,
      title: 'Risk-free development approach',
    },
  ],

  developmentProcess: {
    heading: `<span class="text-red">Drupal</span> Development Process`,
    description: `Our structured Drupal development process ensures quality, security, and scalability.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis & Planning',
        description:
          'We analyze business goals, content strategy, and technical requirements to define a clear roadmap.',
      },
      {
        title: 'UX/UI & Information Architecture',
        description:
          'Designing intuitive interfaces and structured content models for optimal user experience.',
      },
      {
        title: 'Drupal Development & Customization',
        description:
          'Custom themes, modules, integrations, and configurations using Drupal best practices.',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'Comprehensive security, performance, and functional testing before launch.',
      },
      {
        title: 'Deployment & Ongoing Support',
        description:
          'Secure deployment, monitoring, maintenance, and continuous improvements.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A snapshot of our Drupal and CMS-based projects.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'Drupal-based content platform optimized for performance and scalability.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'Enterprise Drupal solution with complex content workflows.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'High-traffic Drupal website with custom modules and integrations.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use for <span class="text-red">Drupal Development</span>`,
    description: `Tools and technologies our Drupal experts work with.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'CMS & Backend',
        servicesImg: framework,
        servicesItems: ['Drupal 9/10', 'PHP', 'Symfony'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frontend',
        servicesImg: tools,
        servicesItems: ['HTML5', 'CSS3', 'JavaScript', 'Twig', 'React'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'PostgreSQL'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST & JSON APIs',
          'Third-party integrations',
          'CRM & ERP systems',
          'Payment gateways',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Tools',
        servicesImg: dns,
        servicesItems: ['Git', 'Docker', 'CI/CD', 'AWS', 'Cloud Hosting'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Common questions about Drupal development services.',
    faqs: [
      {
        question: 'Why choose Drupal for enterprise websites?',
        answer:
          'Drupal offers advanced security, scalability, and content management features ideal for enterprise platforms.',
      },
      {
        question: 'Can you migrate from an older Drupal version?',
        answer:
          'Yes, we provide secure migration and upgrades from Drupal 7/8 to the latest versions.',
      },
      {
        question: 'Is Drupal suitable for large-scale applications?',
        answer:
          'Absolutely. Drupal is widely used for government, enterprise, and high-traffic platforms.',
      },
      {
        question: 'Do you provide Drupal maintenance services?',
        answer:
          'Yes, we offer ongoing maintenance, security updates, and performance optimization.',
      },
    ],
  },
};
