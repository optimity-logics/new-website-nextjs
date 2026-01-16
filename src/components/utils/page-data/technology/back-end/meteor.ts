import meteor from '../../../../../../public/webp/technology/backend/meteor.webp';
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

export const MeteorData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Meteor JS</span> Development Company`,
    techName: 'Meteor JS',
    description: `Optimity Logics is a trusted Meteor JS development company delivering
real-time, scalable, and high-performance web applications. Our experienced Meteor JS
developers build end-to-end solutions using a unified JavaScript stack, ensuring faster
development, seamless data synchronization, and robust application architecture aligned
with your business goals.`,
    techImg: meteor,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Meteor JS</span> Development
            Services Aligned with Your Needs`,
    description: `Whether you want to build a real-time web application, MVP, or
enterprise-grade solution, our Meteor JS experts have you covered. As a leading
Meteor JS development company, we deliver full-cycle development services
from concept to deployment.`,
    developmentServices: [
      {
        title: 'Custom Meteor JS Development',
        description:
          'We build custom Meteor JS applications tailored to your business needs, offering real-time data updates, high scalability, and secure performance.',
      },
      {
        title: 'Real-Time Application Development',
        description:
          'Leverage Meteor’s real-time capabilities to build chat apps, dashboards, collaboration tools, and live data-driven platforms.',
      },
      {
        title: 'MVP Development with Meteor JS',
        description:
          'We help startups launch fast with MVP development using Meteor JS, reducing time-to-market while maintaining scalability.',
      },
      {
        title: 'Meteor JS Migration Services',
        description:
          'Seamlessly migrate your existing applications to Meteor JS for better performance, maintainability, and real-time functionality.',
      },
      {
        title: 'API & Third-Party Integrations',
        description:
          'We integrate REST APIs, GraphQL, payment gateways, and third-party services to extend your Meteor JS application’s functionality.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Our team provides ongoing support, performance optimization, and feature enhancements to keep your Meteor JS app running smoothly.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Meteor JS Development?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Experienced Meteor JS Developers',
        content: {
          heading: 'A skilled team with deep expertise in Meteor JS ecosystem.',
          desc: `Our developers have hands-on experience building real-time,
scalable, and secure Meteor JS applications across multiple industries.`,
          points: [
            'Expert JavaScript developers',
            'Strong Meteor & Node.js expertise',
            'Proven real-time app experience',
            'Clean and maintainable code',
          ],
        },
      },
      {
        id: 2,
        title: 'Agile & Transparent Process',
        content: {
          heading: 'A development process you can trust',
          desc: `We follow agile methodologies with clear communication,
regular updates, and complete project transparency.`,
          points: [
            'Sprint-based development',
            'Regular progress reports',
            'Flexible engagement models',
          ],
        },
      },
      {
        id: 3,
        title: 'Scalable & Future-Ready Solutions',
        content: {
          heading: 'Applications designed to grow with your business',
          desc: `Our Meteor JS solutions are built with scalability,
security, and performance in mind.`,
          points: [
            'Cloud-ready architecture',
            'High performance optimization',
            'Long-term scalability',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> real-time web application </span> with Meteor JS?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated development resources' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Risk-free engagement*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Meteor JS </span>
            Development Process`,
    description: `Our streamlined Meteor JS development process ensures
high-quality delivery, faster turnaround, and predictable outcomes.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We understand your business goals, application requirements, and technical needs to define a clear development roadmap.',
      },
      {
        title: 'Architecture & Planning',
        description:
          'Our team designs a scalable Meteor JS architecture, selecting the right packages, database, and integrations.',
      },
      {
        title: 'Development & Testing',
        description:
          'We develop real-time features using Meteor JS and conduct rigorous testing to ensure performance, security, and reliability.',
      },
      {
        title: 'Deployment & Ongoing Support',
        description:
          'We deploy your application and provide continuous monitoring, maintenance, and feature enhancements.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `Take a look at some of the successful projects we’ve delivered
using modern web technologies.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `A scalable booking platform with real-time availability and seamless user experience.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `An enterprise web solution with real-time data synchronization.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `A dynamic platform optimized for performance and scalability.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `A real-time e-learning platform with interactive features.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `A modern rental platform with live data updates.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `A feature-rich platform with secure real-time interactions.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Meteor JS Development</span>`,
    description: `Here’s a list of tools and technologies our Meteor JS experts use
to build high-performance applications:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Core Technologies',
        servicesImg: framework,
        servicesItems: ['Meteor JS', 'Node.js', 'JavaScript (ES6+)', 'MongoDB'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Frontend',
        servicesImg: tools,
        servicesItems: ['React', 'Blaze', 'Vue', 'HTML5', 'CSS3'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MongoDB', 'Redis', 'Minimongo'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST APIs',
          'GraphQL',
          'Authentication & Authorization',
          'Payment Gateways',
          'Cloud Services',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Deployment',
        servicesImg: dns,
        servicesItems: ['Docker', 'AWS', 'CI/CD Pipelines', 'Galaxy Hosting'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'We’ve answered the most common questions about Meteor JS development.',
    faqs: [
      {
        question: 'Why choose Meteor JS for web development?',
        answer:
          'Meteor JS enables real-time functionality, faster development, and a unified JavaScript stack for both frontend and backend.',
      },
      {
        question: 'Is Meteor JS suitable for large-scale applications?',
        answer:
          'Yes, Meteor JS supports scalable architecture and is ideal for real-time and enterprise applications.',
      },
      {
        question: 'Can you migrate my existing app to Meteor JS?',
        answer:
          'Absolutely. We provide seamless migration services with minimal downtime.',
      },
      {
        question: 'How long does Meteor JS development take?',
        answer:
          'The timeline depends on project complexity, features, and integrations.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we offer ongoing maintenance, performance optimization, and feature upgrades.',
      },
    ],
  },
};
