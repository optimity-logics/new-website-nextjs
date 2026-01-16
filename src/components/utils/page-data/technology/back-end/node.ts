import node from '../../../../../../public/webp/technology/backend/node.webp';
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

export const NodeData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Node.js</span> Development Company`,
    techName: 'Node JS',
    description: `Optimity Logics is a reliable Node.js development company delivering
scalable, high-performance, and secure backend solutions. Our experienced Node.js
developers build real-time, API-driven, and cloud-ready applications tailored to your
business requirements, ensuring speed, flexibility, and long-term scalability.`,
    techImg: node,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Node.js</span> Development
            Services Aligned with Your Needs`,
    description: `Whether you need a lightweight backend, real-time application,
or enterprise-grade system, our Node.js experts have you covered. As a leading
Node.js development company, we deliver end-to-end backend and full-stack solutions.`,
    developmentServices: [
      {
        title: 'Custom Node.js Development',
        description:
          'We develop custom Node.js applications that are fast, scalable, and optimized for high traffic and performance.',
      },
      {
        title: 'API & Backend Development',
        description:
          'Our team builds secure RESTful and GraphQL APIs to power web, mobile, and third-party integrations.',
      },
      {
        title: 'Real-Time Application Development',
        description:
          'We create real-time applications such as chat apps, dashboards, and collaboration tools using Node.js and WebSockets.',
      },
      {
        title: 'Microservices Architecture',
        description:
          'Design and development of scalable microservices-based applications using Node.js for better flexibility and maintainability.',
      },
      {
        title: 'Node.js Migration Services',
        description:
          'We migrate legacy systems to Node.js to improve performance, scalability, and maintainability.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Ongoing monitoring, optimization, updates, and technical support to keep your Node.js application running smoothly.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Node.js Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Expert Node.js Developers',
        content: {
          heading: 'A team with strong backend and JavaScript expertise',
          desc: `Our Node.js developers have extensive experience building
scalable, secure, and high-performance backend systems.`,
          points: [
            'Experienced Node.js engineers',
            'Strong JavaScript & backend expertise',
            'Proven enterprise project delivery',
            'Clean and maintainable codebase',
          ],
        },
      },
      {
        id: 2,
        title: 'Agile & Transparent Development',
        content: {
          heading: 'Predictable delivery with full visibility',
          desc: `We follow agile methodologies with continuous communication,
regular updates, and complete transparency.`,
          points: [
            'Sprint-based execution',
            'Regular progress updates',
            'Flexible engagement models',
          ],
        },
      },
      {
        id: 3,
        title: 'Scalable & Secure Solutions',
        content: {
          heading: 'Built for performance and growth',
          desc: `Our Node.js solutions are designed with scalability,
security, and future expansion in mind.`,
          points: [
            'High-performance architecture',
            'Secure API development',
            'Cloud-ready deployment',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> scalable backend </span> with Node.js?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated development resources' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Risk-free engagement*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Node.js </span>
            Development Process`,
    description: `Our structured Node.js development process ensures
high-quality code, scalability, and on-time delivery.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze business needs, system requirements, and technical goals to define a clear backend strategy.',
      },
      {
        title: 'Architecture & Planning',
        description:
          'Our team designs a scalable Node.js architecture, database structure, and API flow.',
      },
      {
        title: 'Development & Testing',
        description:
          'We develop robust Node.js solutions and perform extensive testing to ensure performance, security, and reliability.',
      },
      {
        title: 'Deployment & Support',
        description:
          'We deploy your application and provide continuous monitoring, maintenance, and enhancements.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `Discover some of the backend and full-stack solutions
we’ve successfully delivered to our clients.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `A scalable backend system supporting real-time bookings and integrations.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Enterprise-grade backend platform built with Node.js.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `High-performance API-driven application with real-time data handling.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `A scalable backend powering interactive learning experiences.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `A modern rental platform with secure Node.js APIs.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `A feature-rich platform built on scalable Node.js architecture.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Node.js Development</span>`,
    description: `Here’s a list of tools and technologies our Node.js experts
use to build scalable backend solutions:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Core Technologies',
        servicesImg: framework,
        servicesItems: ['Node.js', 'JavaScript (ES6+)', 'TypeScript'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frameworks',
        servicesImg: tools,
        servicesItems: ['Express.js', 'NestJS', 'Fastify', 'Koa'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'APIs & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST APIs',
          'GraphQL',
          'Authentication & Authorization',
          'Payment Gateways',
          'Third-party APIs',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Deployment',
        servicesImg: dns,
        servicesItems: ['Docker', 'AWS', 'CI/CD Pipelines', 'Nginx'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Answers to common questions about Node.js development.',
    faqs: [
      {
        question: 'Why choose Node.js for backend development?',
        answer:
          'Node.js offers high performance, scalability, and real-time capabilities using a single JavaScript runtime.',
      },
      {
        question: 'Is Node.js suitable for enterprise applications?',
        answer:
          'Yes, Node.js is widely used for enterprise-grade, high-traffic, and scalable applications.',
      },
      {
        question: 'Can you migrate existing systems to Node.js?',
        answer:
          'Yes, we provide seamless migration services with minimal downtime.',
      },
      {
        question: 'How long does Node.js development take?',
        answer:
          'Timelines depend on project complexity, features, and integrations.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we offer continuous maintenance, optimization, and enhancements.',
      },
    ],
  },
};
