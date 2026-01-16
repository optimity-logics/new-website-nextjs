import python from '../../../../../../public/webp/technology/backend/python.webp';
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

export const PythonData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Python</span> Development Company`,
    techName: 'Python',
    description: `Optimity Logics is a reliable Python development company delivering
secure, scalable, and high-performance solutions. Our experienced Python developers
build web applications, backend systems, APIs, automation tools, and data-driven
solutions tailored to your business needs.`,
    techImg: python,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Python</span> Development
            Services Aligned with Your Needs`,
    description: `From web applications to data-driven platforms, our Python
development services are designed to deliver performance, scalability, and
business value across industries.`,
    developmentServices: [
      {
        title: 'Custom Python Development',
        description:
          'We build custom Python applications tailored to your business workflows, ensuring scalability and clean architecture.',
      },
      {
        title: 'Python Web Development',
        description:
          'Robust web applications using frameworks like Django and Flask with secure backend architecture.',
      },
      {
        title: 'API Development & Integration',
        description:
          'Design and integration of secure RESTful APIs for seamless third-party connectivity.',
      },
      {
        title: 'Data Analytics & Processing',
        description:
          'Powerful data processing and analytics solutions using Python libraries and tools.',
      },
      {
        title: 'Automation & Scripting',
        description:
          'Automation of repetitive tasks and workflows using Python scripts to improve efficiency.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Continuous monitoring, upgrades, and support to keep Python applications running smoothly.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Python Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Expert Python Developers',
        content: {
          heading: 'Experienced developers with deep Python expertise',
          desc: `Our Python engineers have hands-on experience delivering
scalable, secure, and high-performance applications across domains.`,
          points: [
            'Clean and maintainable code',
            'Industry best practices',
            'Framework-based development',
            'Scalable architecture',
          ],
        },
      },
      {
        id: 2,
        title: 'Agile & Transparent Process',
        content: {
          heading: 'Faster delivery with complete visibility',
          desc: `We follow agile methodologies to ensure flexibility,
clear communication, and on-time project delivery.`,
          points: [
            'Sprint-based execution',
            'Regular progress updates',
            'Flexible engagement models',
          ],
        },
      },
      {
        id: 3,
        title: 'Secure & Future-Ready Solutions',
        content: {
          heading: 'Built to scale with your business',
          desc: `Our Python solutions are designed for security,
performance, and long-term scalability.`,
          points: [
            'Secure coding standards',
            'Performance optimization',
            'Future-ready architecture',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> scalable solution </span> using Python?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated development resources' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Risk-free engagement*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Python </span>
            Development Process`,
    description: `Our structured Python development process ensures
quality delivery, scalability, and business alignment.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze business goals, technical needs, and project scope to define a clear development roadmap.',
      },
      {
        title: 'Architecture & Design',
        description:
          'Designing scalable system architecture and database structures for long-term success.',
      },
      {
        title: 'Development & Testing',
        description:
          'Python development with rigorous testing to ensure security, performance, and reliability.',
      },
      {
        title: 'Deployment & Support',
        description:
          'Smooth deployment with continuous monitoring, maintenance, and technical support.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of Python-based solutions we’ve delivered
across web, backend, and data-driven platforms.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Python-powered backend system with secure data handling.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Enterprise-grade Python web application.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `High-performance Python API-driven platform.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Learning management platform built using Python.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Scalable rental solution with Python backend.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `Custom Python web solution with optimized performance.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Python Development</span>`,
    description: `Our Python developers use modern tools and frameworks
to build reliable and scalable solutions.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Django', 'Flask', 'FastAPI'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: ['VS Code', 'PyCharm', 'Git', 'Postman'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Libraries & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'NumPy',
          'Pandas',
          'Celery',
          'REST APIs',
          'Payment Gateways',
          'Authentication Systems',
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
    description: 'Answers to common questions about Python development.',
    faqs: [
      {
        question: 'Why choose Python for development?',
        answer:
          'Python offers simplicity, scalability, and a rich ecosystem, making it ideal for web, data, and backend development.',
      },
      {
        question: 'Which Python frameworks do you use?',
        answer:
          'We work with Django, Flask, FastAPI, and other modern Python frameworks.',
      },
      {
        question: 'Can you migrate legacy systems to Python?',
        answer:
          'Yes, we provide seamless migration and modernization services.',
      },
      {
        question: 'Is Python secure for enterprise applications?',
        answer:
          'Yes, we follow strict security best practices and testing standards.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Absolutely. We offer continuous maintenance and support services.',
      },
    ],
  },
};
