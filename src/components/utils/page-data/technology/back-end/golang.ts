import golang from '../../../../../../public/webp/technology/backend/go.webp';
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

export const GolangData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Golang</span> Development Company`,
    techName: 'Go Lang',
    description: `Optimity Logics is a trusted Golang development company delivering high-performance,
scalable, and secure backend solutions. Our experienced Go developers build robust
systems ranging from microservices and APIs to cloud-native and distributed
applications that align perfectly with your business objectives.`,
    techImg: golang,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Golang</span> Development
            Services Aligned with Your Business Needs`,
    description: `Whether you need a high-performance backend, scalable microservices,
or cloud-native applications, our Golang experts deliver efficient and reliable
solutions. We support you through every phase of the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Golang Development',
        description:
          'We build custom Golang applications tailored to your business requirements, ensuring high performance, scalability, and long-term maintainability.',
      },
      {
        title: 'Backend & API Development',
        description:
          'Our Go developers create secure and high-speed REST and GraphQL APIs to power web, mobile, and enterprise applications.',
      },
      {
        title: 'Microservices Architecture',
        description:
          'We design and develop microservices-based systems using Golang to ensure scalability, fault tolerance, and faster deployments.',
      },
      {
        title: 'Cloud-Native Application Development',
        description:
          'We build cloud-ready Golang applications optimized for AWS, GCP, and Azure with containerization and orchestration support.',
      },
      {
        title: 'High-Performance Systems',
        description:
          'Leverage Golang’s concurrency model to build high-throughput systems such as real-time platforms, data pipelines, and streaming services.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'We provide ongoing monitoring, optimization, and support to ensure your Golang applications remain secure and performant.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Golang Development?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Expert Golang Engineers',
        content: {
          heading: 'Skilled developers with deep Golang expertise',
          desc: `Our engineers have hands-on experience building scalable, production-grade systems using Golang across multiple industries.`,
          points: [
            'Experienced Golang professionals',
            'Strong system design expertise',
            'Production-ready coding standards',
            'Performance-driven development',
          ],
        },
      },
      {
        id: 2,
        title: 'Scalable & Secure Solutions',
        content: {
          heading: 'Built for performance and growth',
          desc: `We design Golang solutions that scale seamlessly while ensuring high security, reliability, and fault tolerance.`,
          points: [
            'Secure coding practices',
            'Scalable system architecture',
            'Cloud-ready applications',
          ],
        },
      },
      {
        id: 3,
        title: 'Transparent Process',
        content: {
          heading: 'Clear communication and delivery',
          desc: `Our structured development process ensures transparency, predictable timelines, and measurable outcomes.`,
          points: [
            'Agile development approach',
            'Regular progress updates',
            'On-time delivery',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a <span class="text-red capitalize"> high-performance backend </span> using Golang?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Flexible resource scaling' },
    { img: hiringModal, title: 'Multiple engagement models' },
    { img: refundPolicy, title: 'Risk-free development approach*' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Golang </span>
            Development Process`,
    description: `Our structured Golang development process ensures efficiency,
scalability, and high code quality from concept to deployment.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze business objectives, technical needs, and system requirements to define a clear development roadmap.',
      },
      {
        title: 'System & Architecture Design',
        description:
          'We design scalable architectures focusing on performance, concurrency, and future growth.',
      },
      {
        title: 'Golang Development',
        description:
          'Our engineers develop clean, efficient, and maintainable Golang code following best practices.',
      },
      {
        title: 'Testing & Optimization',
        description:
          'We conduct rigorous testing and performance optimization to ensure reliability and scalability.',
      },
      {
        title: 'Deployment & Support',
        description:
          'We deploy your solution and provide continuous monitoring, maintenance, and enhancements.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of the solutions we’ve delivered, showcasing our
technical expertise and commitment to quality.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'A scalable backend system built to handle high traffic and real-time operations.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'Enterprise-grade backend services optimized for performance and reliability.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'High-performance APIs powering seamless digital experiences.',
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription:
          'A scalable learning platform backend supporting thousands of users.',
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription:
          'Cloud-native backend enabling fast and secure operations.',
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription:
          'A robust backend system designed for real-time data processing.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Golang Development</span>`,
    description: `A curated list of tools and technologies our Golang experts
use to build scalable and high-performance solutions.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Languages & Frameworks',
        servicesImg: framework,
        servicesItems: ['Golang', 'Gin', 'Echo', 'Fiber'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Go Modules',
          'Docker',
          'Git, GitHub, GitLab',
          'VS Code',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST & GraphQL APIs',
          'gRPC',
          'Kafka',
          'AWS & GCP Services',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD & DevOps',
        servicesImg: dns,
        servicesItems: ['GitHub Actions', 'Jenkins', 'Docker CI', 'Kubernetes'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'We’ve answered the most common Golang development questions.',
    faqs: [
      {
        question: 'Why choose Golang for backend development?',
        answer:
          'Golang offers high performance, built-in concurrency, scalability, and simplicity, making it ideal for modern backend systems.',
      },
      {
        question: 'Is Golang suitable for large-scale systems?',
        answer:
          'Yes, Golang is widely used for large-scale, distributed, and cloud-native systems.',
      },
      {
        question: 'Can Golang be used with microservices?',
        answer:
          'Absolutely. Golang is one of the most popular choices for building microservices architectures.',
      },
      {
        question: 'Do you provide Golang maintenance services?',
        answer:
          'Yes, we offer ongoing support, optimization, and maintenance for Golang applications.',
      },
      {
        question: 'How do I start a Golang project with Optimity Logics?',
        answer:
          'Simply contact us, and our team will guide you through requirements, planning, and execution.',
      },
    ],
  },
};
