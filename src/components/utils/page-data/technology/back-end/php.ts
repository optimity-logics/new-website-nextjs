import php from '../../../../../../public/webp/technology/backend/php.webp';
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

export const PhpData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">PHP</span> Development Company`,
    techName: 'PHP',
    description: `Optimity Logics is a trusted PHP development company delivering
secure, scalable, and high-performance web solutions. Our expert PHP developers
build dynamic websites, enterprise web applications, and backend systems tailored
to your business goals using modern PHP frameworks and best practices.`,
    techImg: php,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our PHP</span> Development
            Services Aligned with Your Needs`,
    description: `Whether you need a dynamic website, enterprise application,
or a robust backend system, our PHP developers deliver scalable and reliable
solutions customized to your business requirements.`,
    developmentServices: [
      {
        title: 'Custom PHP Web Development',
        description:
          'We build custom PHP-based web applications that are secure, scalable, and optimized for performance.',
      },
      {
        title: 'PHP Framework Development',
        description:
          'Expert development using popular PHP frameworks like Laravel, Symfony, and CodeIgniter.',
      },
      {
        title: 'E-commerce Development',
        description:
          'Development of secure and scalable e-commerce platforms powered by PHP and modern technologies.',
      },
      {
        title: 'API Development & Integration',
        description:
          'We create and integrate RESTful APIs to connect your PHP application with third-party services.',
      },
      {
        title: 'PHP Migration & Upgradation',
        description:
          'Seamless migration of legacy applications to modern PHP versions and frameworks.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Continuous monitoring, optimization, and support to ensure smooth application performance.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for PHP Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Experienced PHP Developers',
        content: {
          heading:
            'Skilled developers with deep PHP expertise',
          desc: `Our PHP developers have hands-on experience delivering
scalable and secure web applications across industries.`,
          points: [
            'Expert PHP engineers',
            'Framework-driven development',
            'Clean and maintainable code',
            'Enterprise-grade solutions',
          ],
        },
      },
      {
        id: 2,
        title: 'Agile & Transparent Process',
        content: {
          heading: 'Faster delivery with full visibility',
          desc: `We follow agile development methodologies to ensure
flexibility, transparency, and timely project delivery.`,
          points: [
            'Agile sprint execution',
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
          desc: `Our PHP solutions are designed with security,
performance, and scalability at their core.`,
          points: [
            'Secure coding practices',
            'Scalable architecture',
            'Performance optimization',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> powerful web solution </span> using PHP?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated development resources' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Risk-free engagement*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> PHP </span>
            Development Process`,
    description: `Our proven PHP development process ensures
quality, scalability, and on-time delivery.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We understand your business objectives and define a clear PHP development strategy.',
      },
      {
        title: 'Architecture & Design',
        description:
          'Designing scalable system architecture and database structure for long-term success.',
      },
      {
        title: 'Development & Testing',
        description:
          'Robust PHP development with rigorous testing to ensure performance and security.',
      },
      {
        title: 'Deployment & Support',
        description:
          'Smooth deployment with ongoing maintenance and technical support.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of web and backend solutions
we’ve successfully delivered using PHP.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `A scalable PHP-based booking platform with secure backend.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Enterprise web application built using PHP frameworks.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `High-performance backend system powered by PHP.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `A dynamic PHP-based learning management platform.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `A modern rental platform with PHP-driven backend.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `Feature-rich web application developed using PHP.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> PHP Development</span>`,
    description: `Here’s a list of tools and technologies our PHP experts
use to deliver high-quality web solutions:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Core Technologies',
        servicesImg: framework,
        servicesItems: ['PHP 8+', 'OOP PHP', 'MVC Architecture'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frameworks',
        servicesImg: tools,
        servicesItems: ['Laravel', 'Symfony', 'CodeIgniter', 'Yii'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'APIs & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST APIs',
          'Payment Gateways',
          'Third-party APIs',
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
    description: 'Common questions about PHP development services.',
    faqs: [
      {
        question: 'Why choose PHP for web development?',
        answer:
          'PHP is a reliable, scalable, and cost-effective technology widely used for web and backend development.',
      },
      {
        question: 'Which PHP frameworks do you use?',
        answer:
          'We work with Laravel, Symfony, CodeIgniter, and other modern PHP frameworks.',
      },
      {
        question: 'Can you migrate legacy PHP applications?',
        answer:
          'Yes, we offer seamless migration and modernization services.',
      },
      {
        question: 'How secure are PHP applications?',
        answer:
          'We follow best security practices to ensure secure and robust PHP solutions.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we provide continuous maintenance and support services.',
      },
    ],
  },
};
