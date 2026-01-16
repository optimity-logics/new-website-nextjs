import { IPropsDataTypes } from '@/components/type/type';
import framework from '../../../../../../public/svg/technology/mobile/framework.svg';
import tools from '../../../../../../public/svg/technology/mobile/tools-utilities.svg';
import database from '../../../../../../public/svg/technology/mobile/database.svg';
import plugin from '../../../../../../public/svg/technology/mobile/plugin.svg';
import dns from '../../../../../../public/svg/technology/mobile/dns.svg';
import webApps from '../../../../../../public/webp/services/web-app.webp';
import mobileAppDevelopmentImg from '../../../../../../public/webp/services/mobile-app.webp';
import softwareDevelopmentImg from '../../../../../../public/webp/services/soft-development.webp';
import saasDevelopmentImg from '../../../../../../public/webp/services/saas.webp';
import mvpDevelopmentImg from '../../../../../../public/webp/services/mvp.webp';
import appModernizationImg from '../../../../../../public/webp/services/app-modify.webp';
import gameDevelopmentImg from '../../../../../../public/webp/services/game-development.webp';
import nda from '../../../../../../public/svg/services/nda.svg';
import hiringModal from '../../../../../../public/svg/services/hiring-models.svg';
import refundPolicy from '../../../../../../public/svg/services/refund-policy.svg';
import resource from '../../../../../../public/svg/services/resource.svg';

export const webAppDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Web App</span> Development Company`,
    techName: 'Web Apps',
    description: `Optimity Logics is a leading web app development company in the USA, delivering secure,
    scalable, and high-performance web applications. Our expert developers build custom
    web solutions tailored to your business goals—from idea validation to deployment
    and long-term support.`,
    techImg: webApps,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Web App</span> Development Services Aligned with Your Needs`,
    description: `Whether you need a custom web application, enterprise platform, or SaaS solution,
    our web app development services are designed to ensure scalability, performance,
    and seamless user experiences throughout the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Web App Development',
        description:
          'We build tailor-made web applications aligned with your business processes, ensuring scalability and optimal performance.',
      },
      {
        title: 'Enterprise Web Applications',
        description:
          'Secure and scalable enterprise-grade web solutions built to manage complex workflows and integrations.',
      },
      {
        title: 'SaaS Application Development',
        description:
          'End-to-end SaaS web app development with cloud scalability, subscription management, and multi-tenancy.',
      },
      {
        title: 'Progressive Web Apps (PWA)',
        description:
          'Fast, reliable, and engaging progressive web apps that deliver app-like experiences in the browser.',
      },
      {
        title: 'Web App Modernization',
        description:
          'Upgrade legacy web applications with modern technologies to improve performance and user experience.',
      },
      {
        title: 'API Development & Integration',
        description:
          'Secure API development and third-party integrations for seamless system communication.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Web App Development Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Business-Driven Approach',
        content: {
          heading: 'Web solutions aligned with your business goals',
          desc: `We focus on understanding your business challenges and converting them into scalable web applications.`,
          points: [
            'Goal-oriented development',
            'Scalable architecture',
            'User-centric design',
            'Future-ready solutions',
          ],
        },
      },
      {
        id: 2,
        title: 'Experienced Web Developers',
        content: {
          heading: 'Skilled team with real-world experience',
          desc: `Our developers are proficient in modern frameworks and industry best practices.`,
          points: [
            'Modern tech stack',
            'Clean & maintainable code',
            'Performance-focused development',
          ],
        },
      },
      {
        id: 3,
        title: 'Transparent & Agile Process',
        content: {
          heading: 'Clear communication and predictable delivery',
          desc: `We follow agile methodologies with complete transparency throughout the project.`,
          points: [
            'Agile development process',
            'Regular updates',
            'On-time delivery',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a scalable <span class="text-red capitalize"> web application </span> for your business?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Flexible resource models' },
    { img: hiringModal, title: 'Scalable engagement models' },
    { img: refundPolicy, title: 'Transparent pricing policy' },
  ],

  developmentProcess: {
    heading: `<span class="text-red">Web App</span> Development Process`,
    description: `Our structured web app development process ensures quality,
    scalability, and timely delivery.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze business requirements, user needs, and technical goals to define a clear project scope.',
      },
      {
        title: 'Market & Competitor Research',
        description:
          'We study market trends and competitor solutions to identify opportunities and differentiation.',
      },
      {
        title: 'UX/UI Planning',
        description:
          'We create intuitive user journeys, wireframes, and UI designs for better user engagement.',
      },
      {
        title: 'Architecture & Tech Stack Design',
        description:
          'We design scalable system architecture and select the right technologies.',
      },
      {
        title: 'Web App Development',
        description:
          'Our developers build secure, scalable, and high-performance web applications.',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'We conduct thorough testing to ensure reliability, performance, and security.',
      },
      {
        title: 'Deployment & Support',
        description:
          'We deploy the application and provide ongoing maintenance and support.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red">Web App Development</span>`,
    description: `Here’s a list of tools and technologies our web experts use to build
    scalable and high-performing web applications.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frontend',
        servicesImg: framework,
        servicesItems: [
          'React',
          'Next.js',
          'Vue.js',
          'Angular',
          'HTML5',
          'CSS3',
        ],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Backend',
        servicesImg: tools,
        servicesItems: ['Node.js', 'Express.js', 'NestJS', 'Django', 'Laravel'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'APIs & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'REST APIs',
          'GraphQL',
          'Payment Gateways',
          'Third-party APIs',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Cloud',
        servicesImg: dns,
        servicesItems: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Vercel'],
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After dark',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'We’ve compiled answers to common questions about web app development.',
    faqs: [
      {
        question: 'How much does web app development cost?',
        answer:
          'The cost depends on features, complexity, and technology stack. We provide clear and transparent pricing.',
      },
      {
        question: 'How long does it take to build a web app?',
        answer:
          'Project timelines vary based on requirements, but we follow agile delivery for faster time-to-market.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we offer ongoing maintenance, updates, and performance optimization.',
      },
      {
        question: 'Can you modernize existing web applications?',
        answer:
          'Absolutely. We upgrade legacy systems with modern technologies and improved UX.',
      },
    ],
  },
};

export const mobileAppDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Mobile Apps',
    description: `Optimity Logics is a trusted Flutter app development company in the USA, delivering
    high-performance cross-platform mobile applications. Our expert Flutter developers
    build scalable, secure, and user-centric apps—from ideation and UI/UX design to
    deployment and long-term support.`,
    techImg: mobileAppDevelopmentImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Flutter App</span> Development Services Aligned with Your Needs`,
    description: `Whether you're a startup or an enterprise, our Flutter app development services
    help you build feature-rich, visually appealing, and scalable mobile applications
    for Android and iOS platforms.`,
    developmentServices: [
      {
        title: 'Custom Flutter App Development',
        description:
          'We develop custom Flutter apps tailored to your business needs, ensuring seamless performance across Android and iOS.',
      },
      {
        title: 'Cross-Platform App Development',
        description:
          'Build cost-effective cross-platform mobile apps with a single codebase using Flutter.',
      },
      {
        title: 'UI/UX Design for Mobile Apps',
        description:
          'Our designers craft intuitive and visually engaging mobile experiences that drive user engagement.',
      },
      {
        title: 'Flutter App Migration',
        description:
          'Migrate your existing native or hybrid apps to Flutter for better performance and maintainability.',
      },
      {
        title: 'App Maintenance & Support',
        description:
          'We provide ongoing support, performance optimization, and feature enhancements post-launch.',
      },
      {
        title: 'API Integration & Backend Support',
        description:
          'Secure backend integration, third-party APIs, and cloud services for scalable mobile apps.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Flutter App Development Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Flutter Expertise',
        content: {
          heading: 'Certified Flutter developers with real-world experience',
          desc: `Our team has extensive experience building high-quality Flutter applications across industries.`,
          points: [
            'Single codebase efficiency',
            'High-performance apps',
            'Clean & scalable architecture',
            'Industry best practices',
          ],
        },
      },
      {
        id: 2,
        title: 'User-Centric Approach',
        content: {
          heading: 'Design-driven mobile app development',
          desc: `We focus on usability, performance, and engagement to deliver superior mobile experiences.`,
          points: [
            'Intuitive UI/UX',
            'Performance optimization',
            'User-first design thinking',
          ],
        },
      },
      {
        id: 3,
        title: 'Agile & Transparent Process',
        content: {
          heading: 'Predictable delivery with complete transparency',
          desc: `We follow agile methodologies with regular updates and clear communication.`,
          points: [
            'Sprint-based development',
            'On-time delivery',
            'Flexible engagement models',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a <span class="text-red capitalize"> cross-platform mobile app </span> using Flutter?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Flexible resource allocation' },
    { img: hiringModal, title: 'Scalable hiring models' },
    { img: refundPolicy, title: 'Transparent pricing policy' },
  ],

  developmentProcess: {
    heading: `<span class="text-red">Mobile App</span> Development Process`,
    description: `Our proven Flutter app development process ensures quality,
    scalability, and faster time-to-market.`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze your business goals, target users, and functional requirements to define the project scope.',
      },
      {
        title: 'UI/UX Design',
        description:
          'We create wireframes and intuitive UI designs focused on usability and engagement.',
      },
      {
        title: 'Flutter App Development',
        description:
          'Our developers build feature-rich, scalable Flutter apps with clean and maintainable code.',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'We perform rigorous testing to ensure performance, security, and bug-free functionality.',
      },
      {
        title: 'Deployment & App Store Launch',
        description:
          'We handle app deployment and assist with Google Play Store and Apple App Store submission.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'Ongoing monitoring, updates, and enhancements to keep your app future-ready.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of mobile applications we’ve successfully delivered across industries.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `A mobile booking and rental management app with seamless UX.`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Enterprise-grade mobile solution for streamlined operations.`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Travel-focused mobile app with real-time data integration.`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Mobile learning platform with interactive features.`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Marketplace mobile app with booking and payment features.`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After Dark',
        projectDescription: `Lifestyle mobile app with engaging UI and smooth performance.`,
      },
    ],
  },

  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red">Flutter App Development</span>`,
    description: `Our Flutter developers use modern tools and technologies to build
    scalable and high-performing mobile applications.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Flutter', 'Dart', 'Flutter SDK', 'Dart SDK'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools',
        servicesImg: tools,
        servicesItems: [
          'Android Studio',
          'VS Code',
          'IntelliJ',
          'Git, GitHub, GitLab',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['Firebase', 'Firestore', 'SQLite', 'Hive', 'ObjectBox'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Payment Gateways',
          'Social Login',
          'Push Notifications',
          'Maps & Location',
          'In-App Purchases',
          'AWS Services',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD',
        servicesImg: dns,
        servicesItems: ['Codemagic', 'Bitrise', 'Fastlane', 'GitHub Actions'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Answers to common Flutter mobile app development questions.',
    faqs: [
      {
        question: 'How much does Flutter app development cost?',
        answer:
          'The cost depends on app complexity, features, and integrations. We offer transparent pricing.',
      },
      {
        question: 'How long does it take to build a Flutter app?',
        answer:
          'Timelines vary, but Flutter enables faster development using a single codebase.',
      },
      {
        question: 'Can you publish apps on both Android and iOS?',
        answer:
          'Yes, Flutter apps are deployed on both Google Play Store and Apple App Store.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we offer ongoing maintenance, updates, and feature enhancements.',
      },
    ],
  },
};

export const softwareDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Software Development',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: softwareDevelopmentImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Our Flutter App</span> Development
            Services Aligned with Your Needs`,
    description: ` Whether you're looking to build a custom cross-platform app from
                the technology trends, we've got you covered. As a leading
                Flutter mobile app development company, we provide comprehensive
                Flutter app development services to support you through every stage
                of the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Flutter App Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Lorem Ipsum text dummy',
        content: {
          heading:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
          points: [
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
          ],
        },
      },
      {
        id: 2,
        title: 'Another Lorem Ipsum text',
        content: {
          heading: 'Another heading for this tab',
          desc: `This is another description text for the second tab.`,
          points: [
            'Second tab point one',
            'Second tab point two',
            'Second tab point three',
          ],
        },
      },
      {
        id: 3,
        title: 'Third Lorem Ipsum text',
        content: {
          heading: 'Third tab title section',
          desc: `You can customize each tab content here.`,
          points: ['Point A', 'Point B', 'Point C'],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a cross platform <span class="text-red capitalize"> mobile app </span> using Flutter?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: '100% resource substitution*',
    },
    {
      img: hiringModal,
      title: 'Flexible hiring models',
    },
    {
      img: refundPolicy,
      title: '100% refund policy*',
    },
  ],
  developmentProcess: {
    heading: `<span class="text-red"> Mobile App </span>
            Development Process`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather and analyze business requirements, user needs, and project goals to clearly define the scope and success criteria of the product.',
      },
      {
        title: 'Market & Competitor Research',
        description:
          'Our team studies market trends and competitor products to identify opportunities, differentiate your solution, and ensure market relevance.',
      },
      {
        title: 'Product Roadmap Planning',
        description:
          'We create a detailed product roadmap outlining features, milestones, timelines, and release phases for structured execution.',
      },
      {
        title: 'Technical Feasibility Analysis',
        description:
          'We evaluate technical constraints, integrations, and scalability requirements to ensure the product is feasible and future-ready.',
      },
      {
        title: 'Architecture Design',
        description:
          'We design a robust and scalable system architecture that supports performance, security, and long-term growth.',
      },
      {
        title: 'Technology Stack Selection',
        description:
          'We choose the most suitable technologies, frameworks, and tools aligned with your business goals and product requirements.',
      },
      {
        title: 'Project Estimation & Planning',
        description:
          'We provide detailed time, cost, and resource estimates along with a clear development plan to ensure transparency.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After dark',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Flutter App Development</span>`,
    description: ` Her's a list of tools and technologies our Flutter experts
            excel in, catering to various requirements for Flutter mobile app
            development services:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Flutter', 'Dart plugins', 'Flutter SDK', 'Dart SDK'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Android studio',
          'Visual studio code',
          'IntelliJ',
          'Version control tools (Git, GitLab, Bit Bucket)',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: [
          'Hive',
          'ObjectBox',
          'SQLite',
          'Firebase realtime database',
          'Firestore',
          'Sembast',
          'StorageMoor',
        ],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Plugins & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Firebase (All service)',
          'Provider',
          'Payment Gateways (Stripe, Braintree, Google Pay, Razorpay)',
          'Social Sign-In (Facebook, Google, Apple)',
          'Shared preferences',
          'Image_picker',
          'In-app Purchase',
          'Map flutter_ffmpeg',
          'AWS Amplify',
          'AWS datastore',
          'Freezed',
          'JSON serializable',
          'flutter_local_notifications',
          'BLoC',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD Tools',
        servicesImg: dns,
        servicesItems: ['Travis', 'Cirrus', 'Codemagic', 'Bitrise', 'Fastlane'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'We’ve compiled the answers to your burning questions!',
    faqs: [
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'Is it possible to create an app for free?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How do I start creating my own app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'What’s involved in launching an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
    ],
  },
};
export const saasDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Saas Development',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: saasDevelopmentImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Our Flutter App</span> Development
            Services Aligned with Your Needs`,
    description: ` Whether you're looking to build a custom cross-platform app from
                the technology trends, we've got you covered. As a leading
                Flutter mobile app development company, we provide comprehensive
                Flutter app development services to support you through every stage
                of the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Flutter App Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Lorem Ipsum text dummy',
        content: {
          heading:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
          points: [
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
          ],
        },
      },
      {
        id: 2,
        title: 'Another Lorem Ipsum text',
        content: {
          heading: 'Another heading for this tab',
          desc: `This is another description text for the second tab.`,
          points: [
            'Second tab point one',
            'Second tab point two',
            'Second tab point three',
          ],
        },
      },
      {
        id: 3,
        title: 'Third Lorem Ipsum text',
        content: {
          heading: 'Third tab title section',
          desc: `You can customize each tab content here.`,
          points: ['Point A', 'Point B', 'Point C'],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a cross platform <span class="text-red capitalize"> mobile app </span> using Flutter?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: '100% resource substitution*',
    },
    {
      img: hiringModal,
      title: 'Flexible hiring models',
    },
    {
      img: refundPolicy,
      title: '100% refund policy*',
    },
  ],
  developmentProcess: {
    heading: `<span class="text-red"> Mobile App </span>
            Development Process`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather and analyze business requirements, user needs, and project goals to clearly define the scope and success criteria of the product.',
      },
      {
        title: 'Market & Competitor Research',
        description:
          'Our team studies market trends and competitor products to identify opportunities, differentiate your solution, and ensure market relevance.',
      },
      {
        title: 'Product Roadmap Planning',
        description:
          'We create a detailed product roadmap outlining features, milestones, timelines, and release phases for structured execution.',
      },
      {
        title: 'Technical Feasibility Analysis',
        description:
          'We evaluate technical constraints, integrations, and scalability requirements to ensure the product is feasible and future-ready.',
      },
      {
        title: 'Architecture Design',
        description:
          'We design a robust and scalable system architecture that supports performance, security, and long-term growth.',
      },
      {
        title: 'Technology Stack Selection',
        description:
          'We choose the most suitable technologies, frameworks, and tools aligned with your business goals and product requirements.',
      },
      {
        title: 'Project Estimation & Planning',
        description:
          'We provide detailed time, cost, and resource estimates along with a clear development plan to ensure transparency.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After dark',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Flutter App Development</span>`,
    description: ` Her's a list of tools and technologies our Flutter experts
            excel in, catering to various requirements for Flutter mobile app
            development services:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Flutter', 'Dart plugins', 'Flutter SDK', 'Dart SDK'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Android studio',
          'Visual studio code',
          'IntelliJ',
          'Version control tools (Git, GitLab, Bit Bucket)',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: [
          'Hive',
          'ObjectBox',
          'SQLite',
          'Firebase realtime database',
          'Firestore',
          'Sembast',
          'StorageMoor',
        ],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Plugins & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Firebase (All service)',
          'Provider',
          'Payment Gateways (Stripe, Braintree, Google Pay, Razorpay)',
          'Social Sign-In (Facebook, Google, Apple)',
          'Shared preferences',
          'Image_picker',
          'In-app Purchase',
          'Map flutter_ffmpeg',
          'AWS Amplify',
          'AWS datastore',
          'Freezed',
          'JSON serializable',
          'flutter_local_notifications',
          'BLoC',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD Tools',
        servicesImg: dns,
        servicesItems: ['Travis', 'Cirrus', 'Codemagic', 'Bitrise', 'Fastlane'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'We’ve compiled the answers to your burning questions!',
    faqs: [
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'Is it possible to create an app for free?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How do I start creating my own app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'What’s involved in launching an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
    ],
  },
};
export const mvpDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'MVP Development',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: mvpDevelopmentImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Our Flutter App</span> Development
            Services Aligned with Your Needs`,
    description: ` Whether you're looking to build a custom cross-platform app from
                the technology trends, we've got you covered. As a leading
                Flutter mobile app development company, we provide comprehensive
                Flutter app development services to support you through every stage
                of the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Flutter App Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Lorem Ipsum text dummy',
        content: {
          heading:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
          points: [
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
          ],
        },
      },
      {
        id: 2,
        title: 'Another Lorem Ipsum text',
        content: {
          heading: 'Another heading for this tab',
          desc: `This is another description text for the second tab.`,
          points: [
            'Second tab point one',
            'Second tab point two',
            'Second tab point three',
          ],
        },
      },
      {
        id: 3,
        title: 'Third Lorem Ipsum text',
        content: {
          heading: 'Third tab title section',
          desc: `You can customize each tab content here.`,
          points: ['Point A', 'Point B', 'Point C'],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a cross platform <span class="text-red capitalize"> mobile app </span> using Flutter?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: '100% resource substitution*',
    },
    {
      img: hiringModal,
      title: 'Flexible hiring models',
    },
    {
      img: refundPolicy,
      title: '100% refund policy*',
    },
  ],
  developmentProcess: {
    heading: `<span class="text-red"> Mobile App </span>
            Development Process`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather and analyze business requirements, user needs, and project goals to clearly define the scope and success criteria of the product.',
      },
      {
        title: 'Market & Competitor Research',
        description:
          'Our team studies market trends and competitor products to identify opportunities, differentiate your solution, and ensure market relevance.',
      },
      {
        title: 'Product Roadmap Planning',
        description:
          'We create a detailed product roadmap outlining features, milestones, timelines, and release phases for structured execution.',
      },
      {
        title: 'Technical Feasibility Analysis',
        description:
          'We evaluate technical constraints, integrations, and scalability requirements to ensure the product is feasible and future-ready.',
      },
      {
        title: 'Architecture Design',
        description:
          'We design a robust and scalable system architecture that supports performance, security, and long-term growth.',
      },
      {
        title: 'Technology Stack Selection',
        description:
          'We choose the most suitable technologies, frameworks, and tools aligned with your business goals and product requirements.',
      },
      {
        title: 'Project Estimation & Planning',
        description:
          'We provide detailed time, cost, and resource estimates along with a clear development plan to ensure transparency.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After dark',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Flutter App Development</span>`,
    description: ` Her's a list of tools and technologies our Flutter experts
            excel in, catering to various requirements for Flutter mobile app
            development services:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Flutter', 'Dart plugins', 'Flutter SDK', 'Dart SDK'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Android studio',
          'Visual studio code',
          'IntelliJ',
          'Version control tools (Git, GitLab, Bit Bucket)',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: [
          'Hive',
          'ObjectBox',
          'SQLite',
          'Firebase realtime database',
          'Firestore',
          'Sembast',
          'StorageMoor',
        ],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Plugins & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Firebase (All service)',
          'Provider',
          'Payment Gateways (Stripe, Braintree, Google Pay, Razorpay)',
          'Social Sign-In (Facebook, Google, Apple)',
          'Shared preferences',
          'Image_picker',
          'In-app Purchase',
          'Map flutter_ffmpeg',
          'AWS Amplify',
          'AWS datastore',
          'Freezed',
          'JSON serializable',
          'flutter_local_notifications',
          'BLoC',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD Tools',
        servicesImg: dns,
        servicesItems: ['Travis', 'Cirrus', 'Codemagic', 'Bitrise', 'Fastlane'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'We’ve compiled the answers to your burning questions!',
    faqs: [
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'Is it possible to create an app for free?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How do I start creating my own app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'What’s involved in launching an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
    ],
  },
};
export const appModernization: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'App Modify',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: appModernizationImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Our Flutter App</span> Development
            Services Aligned with Your Needs`,
    description: ` Whether you're looking to build a custom cross-platform app from
                the technology trends, we've got you covered. As a leading
                Flutter mobile app development company, we provide comprehensive
                Flutter app development services to support you through every stage
                of the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Flutter App Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Lorem Ipsum text dummy',
        content: {
          heading:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
          points: [
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
          ],
        },
      },
      {
        id: 2,
        title: 'Another Lorem Ipsum text',
        content: {
          heading: 'Another heading for this tab',
          desc: `This is another description text for the second tab.`,
          points: [
            'Second tab point one',
            'Second tab point two',
            'Second tab point three',
          ],
        },
      },
      {
        id: 3,
        title: 'Third Lorem Ipsum text',
        content: {
          heading: 'Third tab title section',
          desc: `You can customize each tab content here.`,
          points: ['Point A', 'Point B', 'Point C'],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a cross platform <span class="text-red capitalize"> mobile app </span> using Flutter?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: '100% resource substitution*',
    },
    {
      img: hiringModal,
      title: 'Flexible hiring models',
    },
    {
      img: refundPolicy,
      title: '100% refund policy*',
    },
  ],
  developmentProcess: {
    heading: `<span class="text-red"> Mobile App </span>
            Development Process`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather and analyze business requirements, user needs, and project goals to clearly define the scope and success criteria of the product.',
      },
      {
        title: 'Market & Competitor Research',
        description:
          'Our team studies market trends and competitor products to identify opportunities, differentiate your solution, and ensure market relevance.',
      },
      {
        title: 'Product Roadmap Planning',
        description:
          'We create a detailed product roadmap outlining features, milestones, timelines, and release phases for structured execution.',
      },
      {
        title: 'Technical Feasibility Analysis',
        description:
          'We evaluate technical constraints, integrations, and scalability requirements to ensure the product is feasible and future-ready.',
      },
      {
        title: 'Architecture Design',
        description:
          'We design a robust and scalable system architecture that supports performance, security, and long-term growth.',
      },
      {
        title: 'Technology Stack Selection',
        description:
          'We choose the most suitable technologies, frameworks, and tools aligned with your business goals and product requirements.',
      },
      {
        title: 'Project Estimation & Planning',
        description:
          'We provide detailed time, cost, and resource estimates along with a clear development plan to ensure transparency.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After dark',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Flutter App Development</span>`,
    description: ` Her's a list of tools and technologies our Flutter experts
            excel in, catering to various requirements for Flutter mobile app
            development services:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Flutter', 'Dart plugins', 'Flutter SDK', 'Dart SDK'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Android studio',
          'Visual studio code',
          'IntelliJ',
          'Version control tools (Git, GitLab, Bit Bucket)',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: [
          'Hive',
          'ObjectBox',
          'SQLite',
          'Firebase realtime database',
          'Firestore',
          'Sembast',
          'StorageMoor',
        ],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Plugins & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Firebase (All service)',
          'Provider',
          'Payment Gateways (Stripe, Braintree, Google Pay, Razorpay)',
          'Social Sign-In (Facebook, Google, Apple)',
          'Shared preferences',
          'Image_picker',
          'In-app Purchase',
          'Map flutter_ffmpeg',
          'AWS Amplify',
          'AWS datastore',
          'Freezed',
          'JSON serializable',
          'flutter_local_notifications',
          'BLoC',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD Tools',
        servicesImg: dns,
        servicesItems: ['Travis', 'Cirrus', 'Codemagic', 'Bitrise', 'Fastlane'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'We’ve compiled the answers to your burning questions!',
    faqs: [
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'Is it possible to create an app for free?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How do I start creating my own app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'What’s involved in launching an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
    ],
  },
};
export const gameDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Game Development',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: gameDevelopmentImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Our Flutter App</span> Development
            Services Aligned with Your Needs`,
    description: ` Whether you're looking to build a custom cross-platform app from
                the technology trends, we've got you covered. As a leading
                Flutter mobile app development company, we provide comprehensive
                Flutter app development services to support you through every stage
                of the development lifecycle.`,
    developmentServices: [
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
      {
        title: 'Custom Flutter App Development',
        description:
          'Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Flutter App Development Services?`,

    developmentServicesStep: [
      {
        id: 1,
        title: 'Lorem Ipsum text dummy',
        content: {
          heading:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
          points: [
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply',
          ],
        },
      },
      {
        id: 2,
        title: 'Another Lorem Ipsum text',
        content: {
          heading: 'Another heading for this tab',
          desc: `This is another description text for the second tab.`,
          points: [
            'Second tab point one',
            'Second tab point two',
            'Second tab point three',
          ],
        },
      },
      {
        id: 3,
        title: 'Third Lorem Ipsum text',
        content: {
          heading: 'Third tab title section',
          desc: `You can customize each tab content here.`,
          points: ['Point A', 'Point B', 'Point C'],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to build a cross platform <span class="text-red capitalize"> mobile app </span> using Flutter?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    {
      img: nda,
      title: '100% NDA-protected contract',
    },
    {
      img: resource,
      title: '100% resource substitution*',
    },
    {
      img: hiringModal,
      title: 'Flexible hiring models',
    },
    {
      img: refundPolicy,
      title: '100% refund policy*',
    },
  ],
  developmentProcess: {
    heading: `<span class="text-red"> Mobile App </span>
            Development Process`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text`,
    developmentProcessStep: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather and analyze business requirements, user needs, and project goals to clearly define the scope and success criteria of the product.',
      },
      {
        title: 'Market & Competitor Research',
        description:
          'Our team studies market trends and competitor products to identify opportunities, differentiate your solution, and ensure market relevance.',
      },
      {
        title: 'Product Roadmap Planning',
        description:
          'We create a detailed product roadmap outlining features, milestones, timelines, and release phases for structured execution.',
      },
      {
        title: 'Technical Feasibility Analysis',
        description:
          'We evaluate technical constraints, integrations, and scalability requirements to ensure the product is feasible and future-ready.',
      },
      {
        title: 'Architecture Design',
        description:
          'We design a robust and scalable system architecture that supports performance, security, and long-term growth.',
      },
      {
        title: 'Technology Stack Selection',
        description:
          'We choose the most suitable technologies, frameworks, and tools aligned with your business goals and product requirements.',
      },
      {
        title: 'Project Estimation & Planning',
        description:
          'We provide detailed time, cost, and resource estimates along with a clear development plan to ensure transparency.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/edqan.webp',
        projectName: 'E-learning',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/spacerenta.webp',
        projectName: 'Spacerenta',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
      {
        projectImg: '/webp/project/afterdark.webp',
        projectName: 'After dark',
        projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Stack We Use For <span class="text-red"> Flutter App Development</span>`,
    description: ` Her's a list of tools and technologies our Flutter experts
            excel in, catering to various requirements for Flutter mobile app
            development services:`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frameworks',
        servicesImg: framework,
        servicesItems: ['Flutter', 'Dart plugins', 'Flutter SDK', 'Dart SDK'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Tools & Utilities',
        servicesImg: tools,
        servicesItems: [
          'Android studio',
          'Visual studio code',
          'IntelliJ',
          'Version control tools (Git, GitLab, Bit Bucket)',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: [
          'Hive',
          'ObjectBox',
          'SQLite',
          'Firebase realtime database',
          'Firestore',
          'Sembast',
          'StorageMoor',
        ],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Plugins & Integrations',
        servicesImg: plugin,
        servicesItems: [
          'Firebase (All service)',
          'Provider',
          'Payment Gateways (Stripe, Braintree, Google Pay, Razorpay)',
          'Social Sign-In (Facebook, Google, Apple)',
          'Shared preferences',
          'Image_picker',
          'In-app Purchase',
          'Map flutter_ffmpeg',
          'AWS Amplify',
          'AWS datastore',
          'Freezed',
          'JSON serializable',
          'flutter_local_notifications',
          'BLoC',
        ],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD Tools',
        servicesImg: dns,
        servicesItems: ['Travis', 'Cirrus', 'Codemagic', 'Bitrise', 'Fastlane'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'We’ve compiled the answers to your burning questions!',
    faqs: [
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How much does it cost to build an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'Is it possible to create an app for free?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'How do I start creating my own app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
      {
        question: 'What’s involved in launching an app?',
        answer:
          'The cost of building an app will depend on the app’s features, and we as a brand only offer clear, upfront pricing to avoid any confusion.',
      },
    ],
  },
};
