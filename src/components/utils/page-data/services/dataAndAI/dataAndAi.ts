import { IPropsDataTypes } from '@/components/type/type';
import framework from '../../../../../../public/svg/technology/mobile/framework.svg';
import tools from '../../../../../../public/svg/technology/mobile/tools-utilities.svg';
import database from '../../../../../../public/svg/technology/mobile/database.svg';
import plugin from '../../../../../../public/svg/technology/mobile/plugin.svg';
import dns from '../../../../../../public/svg/technology/mobile/dns.svg';
import DataScienceImg from '../../../../../../public/webp/services/data-science.webp';
import ml from '../../../../../../public/webp/services/ml.webp';
import ai from '../../../../../../public/webp/services/ai.webp';
import roboticAi from '../../../../../../public/webp/services/robotic-process.webp';
import computerVisionImg from '../../../../../../public/webp/services/comp-vision.webp';
import generativeAiImg from '../../../../../../public/webp/services/gen-ai.webp';
import nda from '../../../../../../public/svg/services/nda.svg';
import hiringModal from '../../../../../../public/svg/services/hiring-models.svg';
import refundPolicy from '../../../../../../public/svg/services/refund-policy.svg';
import resource from '../../../../../../public/svg/services/resource.svg';

export const dataScience: IPropsDataTypes & { page__type: string } = {
  page__type: 'common',

  HeroSectionData: {
    heading: `<span class="text-red">Data Science</span> Services Company`,
    techName: 'Data Science',
    description: `Optimity Logics is a top-notch Data Science services company in the USA offering robust
cross-platform solutions. With a team of expert Data Scientists onboard, we provide end-to-end
Data Science solutions aligned with your business objectives.`,
    techImg: DataScienceImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Data Science</span> Services Aligned with Your Needs`,
    description: `Whether you're looking to implement AI, ML, or data analytics solutions, we’ve got you covered.
As a leading Data Science company, we provide comprehensive services to support you through every stage
of your data journey.`,
    developmentServices: [
      {
        title: 'Custom Data Science Solutions',
        description:
          'Our experts deliver scalable, robust, and tailored Data Science solutions that drive business growth and improve decision-making.',
      },
      {
        title: 'Predictive Analytics',
        description:
          'We develop predictive models using machine learning algorithms to help you forecast trends and make data-driven decisions.',
      },
      {
        title: 'AI & Machine Learning Models',
        description:
          'We design and deploy AI/ML models that optimize operations, automate processes, and deliver actionable insights.',
      },
      {
        title: 'Data Engineering & Management',
        description:
          'Our team ensures proper data collection, cleaning, integration, and management to build a strong data foundation.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Data Science Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Expert Team',
        content: {
          heading: 'Highly skilled and experienced data science team.',
          desc: `Our team consists of expert data scientists, ML engineers, and analysts who deliver top-quality solutions.`,
          points: [
            'Expert ML Engineers',
            'Data Analysts',
            'AI Specialists',
            'Consulting Experts',
          ],
        },
      },
      {
        id: 2,
        title: 'Tailored Solutions',
        content: {
          heading: 'Solutions customized to your business needs.',
          desc: `We understand your business and provide solutions that align with your goals and requirements.`,
          points: [
            'Custom ML Models',
            'Predictive Analytics',
            'Data Visualization',
          ],
        },
      },
      {
        id: 3,
        title: 'End-to-End Support',
        content: {
          heading: 'From strategy to deployment and support.',
          desc: `We assist you through every stage of your data project, ensuring smooth implementation and measurable results.`,
          points: [
            'Strategy & Planning',
            'Implementation',
            'Monitoring & Support',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Want to leverage <span class="text-red capitalize"> Data Science </span> for your business?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Flexible resource allocation' },
    { img: hiringModal, title: 'Flexible hiring models' },
    { img: refundPolicy, title: 'Satisfaction & refund policy' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Data Science </span> Development Process`,
    description: `Our process ensures high-quality solutions for predictive analytics, ML, AI, and data engineering.`,
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
    heading: `Explore Data Science Projects`,
    description: `Here’s an overview of some of our data science projects demonstrating real-world applications.`,
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
    heading: `Technology Stack We Use For <span class="text-red"> Data Science </span>`,
    description: `We use advanced tools and technologies to deliver robust data-driven solutions.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Programming',
        servicesImg: framework,
        servicesItems: ['Python', 'R', 'SQL', 'Scala'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'ML/AI Tools',
        servicesImg: tools,
        servicesItems: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['MySQL', 'PostgreSQL', 'MongoDB', 'Hadoop'],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Visualization',
        servicesImg: plugin,
        servicesItems: ['Tableau', 'PowerBI', 'Matplotlib', 'Seaborn'],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD Tools',
        servicesImg: dns,
        servicesItems: ['Git', 'Jenkins', 'Docker', 'Kubernetes'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'We’ve compiled answers to your most common questions about Data Science services.',
    faqs: [
      {
        question: 'How much does a data science project cost?',
        answer:
          'Costs depend on project scope, complexity, and data requirements.',
      },
      {
        question: 'Can you provide a free consultation?',
        answer: 'Yes, we offer initial consultations to understand your needs.',
      },
      {
        question: 'Which industries do you serve?',
        answer: 'We serve healthcare, finance, retail, logistics, and more.',
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'Depending on the complexity, projects usually take 4–12 weeks.',
      },
    ],
  },
};

export const machineLerning: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Machine Learning',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: ml,
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
export const artificialIntelligence: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'AI',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: ai,
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
export const roboticAutomation: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Robotics Automation',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: roboticAi,
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
export const computerVision: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Computer Vision',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: computerVisionImg,
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
export const generativeAI: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Flutter</span> App Development Company`,
    techName: 'Generative AI',
    description: `Optimity Logics is a top-notch Flutter app development company in USA offering robust
cross-platform app development solutions. With a team of expert Flutter developers
onboard, we offer end-to-end Flutter app development services, from discovery to full-
fledged development solutions aligned with your business objectives. `,
    techImg: generativeAiImg,
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
