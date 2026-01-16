import laravel from '../../../../../../public/webp/technology/backend/laravel.webp';
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

export const LaravelData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Laravel</span> Development Company`,
    techName: 'Laravel',
    description: `Optimity Logics is a leading Laravel development company delivering secure,
scalable, and high-performing web applications. Our expert Laravel developers
build robust backend systems, APIs, and enterprise-grade solutions tailored
to your business objectives.`,
    techImg: laravel,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Laravel</span> Development
            Services Aligned with Your Needs`,
    description: `Whether you need a custom web application, RESTful APIs,
or enterprise solutions, our Laravel experts deliver reliable and scalable
applications while supporting you through every development phase.`,
    developmentServices: [
      {
        title: 'Custom Laravel Web Development',
        description:
          'We build tailor-made Laravel web applications that are secure, scalable, and optimized for performance and long-term growth.',
      },
      {
        title: 'Laravel API Development',
        description:
          'Our team develops secure and high-performance RESTful and GraphQL APIs using Laravel for seamless integrations.',
      },
      {
        title: 'Enterprise Application Development',
        description:
          'We create enterprise-grade Laravel solutions designed to handle complex business logic and large-scale operations.',
      },
      {
        title: 'Laravel Migration & Upgradation',
        description:
          'Migrate your legacy systems or upgrade existing applications to the latest Laravel versions with minimal downtime.',
      },
      {
        title: 'E-commerce Development with Laravel',
        description:
          'We develop scalable and feature-rich e-commerce platforms using Laravel tailored to your business needs.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Our Laravel support services ensure continuous monitoring, optimization, and smooth application performance.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Laravel Development Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Experienced Laravel Developers',
        content: {
          heading: 'Skilled professionals with deep Laravel expertise',
          desc: `Our Laravel developers have hands-on experience delivering scalable
and secure web solutions across multiple industries.`,
          points: [
            'Certified Laravel developers',
            'Clean and maintainable code',
            'Best security practices',
            'Proven delivery record',
          ],
        },
      },
      {
        id: 2,
        title: 'Scalable & Secure Solutions',
        content: {
          heading: 'Applications built for growth',
          desc: `We architect Laravel applications that scale seamlessly while
maintaining high security and performance standards.`,
          points: [
            'Scalable architecture',
            'Secure authentication & authorization',
            'Performance optimization',
          ],
        },
      },
      {
        id: 3,
        title: 'Transparent Development Process',
        content: {
          heading: 'Clear communication and predictable delivery',
          desc: `Our agile development approach ensures transparency,
regular updates, and on-time delivery.`,
          points: [
            'Agile & sprint-based execution',
            'Regular reporting',
            'Dedicated project managers',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> powerful web application </span> using Laravel?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Flexible resource scaling' },
    { img: hiringModal, title: 'Multiple engagement models' },
    { img: refundPolicy, title: 'Risk-free development approach*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Laravel </span>
            Development Process`,
    description: `Our structured Laravel development process ensures
high-quality, scalable, and secure applications.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We understand your business goals, technical requirements, and user needs to define a clear project scope.',
      },
      {
        title: 'Architecture & Database Design',
        description:
          'We design scalable system architecture and efficient database structures using Laravel best practices.',
      },
      {
        title: 'Laravel Development',
        description:
          'Our developers build robust and maintainable applications using clean code and modern Laravel features.',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'We perform thorough testing to ensure security, performance, and reliability across all use cases.',
      },
      {
        title: 'Deployment & Maintenance',
        description:
          'We deploy the application and provide ongoing maintenance, updates, and technical support.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A snapshot of our Laravel-powered solutions
that demonstrate our technical expertise and attention to detail.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'A Laravel-based booking platform with secure backend and scalable architecture.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'Enterprise-grade Laravel application built for operational efficiency.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'High-performance Laravel APIs supporting real-time features.',
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription:
          'A scalable Laravel LMS platform supporting thousands of learners.',
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription:
          'Laravel-powered marketplace with advanced backend workflows.',
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription:
          'Secure Laravel web platform with optimized performance.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Laravel Development</span>`,
    description: `A carefully selected set of tools and technologies
our Laravel experts use to build reliable solutions.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks & Languages',
        servicesImg: framework,
        servicesItems: ['Laravel', 'PHP 8+', 'Blade', 'Livewire'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Composer',
          'Laravel Forge',
          'Laravel Envoyer',
          'Git, GitHub, GitLab',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST APIs',
          'Payment Gateways (Stripe, Razorpay)',
          'OAuth & Social Login',
          'Third-party APIs',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD & Hosting',
        servicesImg: dns,
        servicesItems: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Answers to common Laravel development questions.',
    faqs: [
      {
        question: 'Why choose Laravel for web development?',
        answer:
          'Laravel offers rapid development, strong security, scalability, and an elegant syntax, making it ideal for modern web applications.',
      },
      {
        question: 'Is Laravel suitable for enterprise applications?',
        answer:
          'Yes, Laravel is widely used for enterprise-grade applications due to its scalability and flexibility.',
      },
      {
        question: 'Do you provide Laravel migration services?',
        answer:
          'Yes, we help migrate legacy systems and upgrade applications to the latest Laravel versions.',
      },
      {
        question: 'Can you integrate third-party services with Laravel?',
        answer:
          'Absolutely. Laravel supports seamless integration with APIs, payment gateways, and external services.',
      },
      {
        question: 'How do I start a Laravel project with Optimity Logics?',
        answer:
          'Simply contact us, and our team will guide you through planning, development, and deployment.',
      },
    ],
  },
};
