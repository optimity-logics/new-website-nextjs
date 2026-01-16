import softwareProductDevelopmentImg from '../../../../../../public/webp/services/software-development.webp';
import { IPropsDataTypes } from '@/components/type/type';
import framework from '../../../../../../public/svg/technology/mobile/framework.svg';
import tools from '../../../../../../public/svg/technology/mobile/tools-utilities.svg';
import database from '../../../../../../public/svg/technology/mobile/database.svg';
import plugin from '../../../../../../public/svg/technology/mobile/plugin.svg';
import dns from '../../../../../../public/svg/technology/mobile/dns.svg';
import uiux from '../../../../../../public/webp/services/uiux.webp';
import digitalMarketingImage from '../../../../../../public/webp/services/digital-marketing.webp';
import qa from '../../../../../../public/webp/services/qe.webp';
import hireDedicatedDev from '../../../../../../public/webp/services/dedicated-team.webp';
import cto from '../../../../../../public/webp/services/gen-ai.webp';
import nda from '../../../../../../public/svg/services/nda.svg';
import hiringModal from '../../../../../../public/svg/services/hiring-models.svg';
import refundPolicy from '../../../../../../public/svg/services/refund-policy.svg';
import resource from '../../../../../../public/svg/services/resource.svg';

export const softwareProductDevelopment: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Software Product</span> Development Company`,
    techName: 'Software',
    description: `Optimity Logics is a trusted software product development company delivering
end-to-end digital solutions for startups, enterprises, and growing businesses.
From idea validation to scalable product development and long-term support,
we help transform your vision into reliable, market-ready software products
aligned with your business goals.`,
    techImg: softwareProductDevelopmentImg,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Software Product</span> Development Services`,
    description: `Whether you're building a new digital product or modernizing an existing one,
our software product development services cover the entire lifecycle.
We design, develop, test, and scale high-quality software solutions
tailored to your unique business requirements.`,
    developmentServices: [
      {
        title: 'Custom Software Development',
        description:
          'We build tailored software solutions that address your specific business needs, ensuring scalability, security, and high performance across platforms.',
      },
      {
        title: 'Product Discovery & Consulting',
        description:
          'Our experts help validate ideas, define product roadmaps, and choose the right technologies to ensure faster time-to-market and reduced risks.',
      },
      {
        title: 'UI/UX Design',
        description:
          'We create intuitive, user-centric designs that enhance engagement and deliver seamless digital experiences across web and mobile platforms.',
      },
      {
        title: 'Web & Mobile App Development',
        description:
          'From enterprise web applications to feature-rich mobile apps, we develop robust solutions using modern frameworks and best practices.',
      },
      {
        title: 'Quality Assurance & Testing',
        description:
          'Our QA team ensures your product meets the highest quality standards through manual and automated testing across devices and environments.',
      },
      {
        title: 'Maintenance & Support',
        description:
          'We provide continuous monitoring, updates, and support to keep your software secure, optimized, and future-ready.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity</span> Logics for Software Product Development?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'End-to-End Expertise',
        content: {
          heading: 'Complete software product development under one roof',
          desc: `From ideation and design to deployment and ongoing support,
we manage the entire product lifecycle with a focus on quality and scalability.`,
          points: [
            'Product strategy & consulting',
            'Agile development approach',
            'Scalable architecture',
            'Post-launch support',
          ],
        },
      },
      {
        id: 2,
        title: 'Experienced Development Team',
        content: {
          heading: 'Skilled professionals with industry experience',
          desc: `Our team consists of experienced developers, designers, and QA engineers
who follow best practices and deliver reliable, high-performing software products.`,
          points: [
            'Certified developers',
            'Modern technology stack',
            'Clean and maintainable code',
          ],
        },
      },
      {
        id: 3,
        title: 'Business-Focused Solutions',
        content: {
          heading: 'Technology aligned with business goals',
          desc: `We focus on building solutions that solve real business problems,
optimize operations, and drive measurable growth.`,
          points: [
            'Custom-built solutions',
            'Cost-effective development',
            'Long-term scalability',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to build a scalable <span class="text-red capitalize"> software product </span> for your business?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected engagement' },
    { img: resource, title: 'Dedicated development resources' },
    { img: hiringModal, title: 'Flexible engagement models' },
    { img: refundPolicy, title: 'Transparent pricing policy' },
  ],

  developmentProcess: {
    heading: `<span class="text-red">Software Product</span> Development Process`,
    description: `Our structured development process ensures transparency,
quality delivery, and faster time-to-market.`,
    developmentProcessStep: [
      {
        title: 'Requirement & Market Analysis',
        description:
          'We analyze business requirements, user needs, and market trends to define a clear product vision and scope.',
      },
      {
        title: 'Product Roadmap & Planning',
        description:
          'We create a structured roadmap with feature priorities, timelines, and an MVP strategy aligned with business goals.',
      },
      {
        title: 'Architecture, UX & Technology Design',
        description:
          'We design scalable system architecture, intuitive user experiences, and select the right technology stack.',
      },
      {
        title: 'Agile Development & Testing',
        description:
          'The product is developed using agile methodologies with continuous testing to ensure quality and performance.',
      },
      {
        title: 'Deployment & Ongoing Support',
        description:
          'We deploy the product seamlessly and provide continuous monitoring, optimization, and post-launch support.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of how we’ve helped businesses build
scalable and impactful digital products.`,
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
    heading: `Technology Stack We Use for <span class="text-red">Software Product Development</span>`,
    description: `We leverage modern, proven technologies to build secure
and scalable software products.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frontend',
        servicesImg: framework,
        servicesItems: ['React', 'Next.js', 'Angular', 'Vue.js'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Backend',
        servicesImg: tools,
        servicesItems: ['Node.js', 'Java', 'Python', 'PHP', '.NET'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Databases',
        servicesImg: database,
        servicesItems: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Cloud',
        servicesImg: dns,
        servicesItems: ['AWS', 'Azure', 'Docker', 'CI/CD Pipelines'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'Answers to common questions about software product development.',
    faqs: [
      {
        question: 'How much does software product development cost?',
        answer:
          'The cost depends on features, complexity, and technology. We provide transparent pricing after requirement analysis.',
      },
      {
        question: 'How long does it take to build a software product?',
        answer:
          'Timelines vary based on scope and complexity, typically ranging from a few weeks to several months.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we offer ongoing maintenance, updates, and technical support after deployment.',
      },
    ],
  },
};

export const uiuxData: IPropsDataTypes = {
  HeroSectionData: {
    heading: `Creative & Strategic <span class="text-red">UI/UX</span> Design Services`,
    techName: 'UI/UX',
    description: `Optimity Logics is a leading UI/UX design company delivering intuitive,
user-centric, and visually engaging digital experiences. We help businesses
design products that are not only beautiful but also functional, accessible,
and conversion-focused—ensuring seamless user journeys across web and mobile platforms.`,
    techImg: uiux,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our UI/UX Design</span> Services`,
    description: `We provide end-to-end UI/UX design services that focus on usability,
aesthetics, and business outcomes. From research to final design handoff,
our process ensures consistent, engaging, and scalable user experiences.`,
    developmentServices: [
      {
        title: 'UI/UX Consulting',
        description:
          'We evaluate your product, users, and business goals to define a design strategy that improves usability, engagement, and conversions.',
      },
      {
        title: 'User Research & Analysis',
        description:
          'Through user interviews, surveys, and behavior analysis, we understand user needs and pain points to design meaningful experiences.',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create low and high-fidelity wireframes and interactive prototypes to visualize workflows and validate ideas early.',
      },
      {
        title: 'UI Design',
        description:
          'Our designers craft visually appealing, brand-consistent interfaces that enhance usability and create lasting impressions.',
      },
      {
        title: 'UX Design',
        description:
          'We design intuitive user journeys, information architecture, and interaction flows focused on simplicity and efficiency.',
      },
      {
        title: 'Usability Testing & Design Validation',
        description:
          'We test designs with real users to identify usability issues and refine the experience before development.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity</span> Logics for UI/UX Design Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'User-Centered Design Approach',
        content: {
          heading: 'Designs built around real user needs',
          desc: `We prioritize users at every stage of the design process to create
experiences that are intuitive, accessible, and engaging.`,
          points: [
            'Human-centered design',
            'Data-driven decisions',
            'Improved usability & engagement',
            'Higher conversion rates',
          ],
        },
      },
      {
        id: 2,
        title: 'Experienced Design Team',
        content: {
          heading: 'Skilled UI/UX designers with industry expertise',
          desc: `Our designers combine creativity with usability principles to
deliver impactful digital experiences across industries.`,
          points: [
            'Industry best practices',
            'Modern design tools',
            'Cross-platform expertise',
          ],
        },
      },
      {
        id: 3,
        title: 'Business-Driven Design',
        content: {
          heading: 'Designs aligned with your business goals',
          desc: `We focus on measurable outcomes—improving retention,
engagement, and overall product success.`,
          points: [
            'Conversion-focused design',
            'Scalable design systems',
            'Consistent brand identity',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to create <span class="text-red capitalize"> intuitive user experiences </span> for your product?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected engagement' },
    { img: resource, title: 'Dedicated design resources' },
    { img: hiringModal, title: 'Flexible engagement models' },
    { img: refundPolicy, title: 'Transparent pricing policy' },
  ],

  developmentProcess: {
    heading: `<span class="text-red">UI/UX</span> Design Process`,
    description: `Our structured UI/UX design process ensures clarity,
consistency, and exceptional user experiences.`,
    developmentProcessStep: [
      {
        title: 'Requirement & Design Discovery',
        description:
          'We understand your business goals, product vision, and target users to define clear design objectives and success metrics.',
      },
      {
        title: 'User & Market Research',
        description:
          'We research user behavior, market trends, and competitor experiences to uncover insights that drive effective design decisions.',
      },
      {
        title: 'User Persona & Journey Mapping',
        description:
          'We create detailed user personas and map user journeys to visualize interactions, identify pain points, and optimize user flows.',
      },
      {
        title: 'Information Architecture',
        description:
          'We structure content, navigation, and interactions to ensure clarity, usability, and a seamless user experience.',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'We design low- and high-fidelity wireframes and interactive prototypes to validate concepts before visual design.',
      },
      {
        title: 'UI Design & Visual Identity',
        description:
          'Our designers craft visually engaging interfaces aligned with your brand, ensuring consistency across platforms.',
      },
      {
        title: 'Usability Testing & Iteration',
        description:
          'We test designs with real users, gather feedback, and refine the experience to ensure maximum usability and engagement.',
      },
    ],
  },

  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of how we’ve helped businesses build
scalable and impactful digital products.`,
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
    heading: `Tools We Use for <span class="text-red">UI/UX Design</span>`,
    description: `We use industry-leading tools to create scalable,
collaborative, and high-quality design solutions.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Design Tools',
        servicesImg: framework,
        servicesItems: ['Figma', 'Adobe XD', 'Sketch'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Prototyping',
        servicesImg: tools,
        servicesItems: ['InVision', 'Framer', 'Marvel'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'User Research',
        servicesImg: database,
        servicesItems: ['Hotjar', 'Maze', 'UsabilityHub'],
      },
    ],
  },

  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Answers to common questions about UI/UX design services.',
    faqs: [
      {
        question: 'Why is UI/UX design important?',
        answer:
          'UI/UX design improves usability, customer satisfaction, and conversions by creating intuitive and engaging user experiences.',
      },
      {
        question: 'Do you redesign existing products?',
        answer:
          'Yes, we offer UI/UX audits and redesign services to improve existing digital products.',
      },
      {
        question: 'Will designs be developer-ready?',
        answer:
          'Absolutely. We provide complete design handoff with assets, guidelines, and specifications.',
      },
    ],
  },
};

export const digitalMarketing: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Digital Marketing</span> Services Company`,
    techName: 'Digital Marketing',
    description: `Optimity Logics is a results-driven digital marketing company helping businesses
    increase online visibility, generate qualified leads, and maximize ROI. Our expert
    marketers craft data-backed strategies across SEO, PPC, social media, and content
    marketing to deliver measurable growth aligned with your business goals.`,
    techImg: digitalMarketingImage,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },

  development: {
    heading: `<span class="text-red">Our Digital Marketing</span> Services
              Tailored for Business Growth`,
    description: `Whether you’re a startup or an established enterprise, we offer end-to-end
    digital marketing solutions designed to attract, engage, and convert your target
    audience while strengthening your brand presence across digital channels.`,
    developmentServices: [
      {
        title: 'Search Engine Optimization (SEO)',
        description:
          'We optimize your website for higher search engine rankings, improved organic traffic, and better user experience using proven on-page, off-page, and technical SEO strategies.',
      },
      {
        title: 'Pay-Per-Click Advertising (PPC)',
        description:
          'Our PPC experts manage high-performing campaigns across Google Ads and social platforms to drive instant traffic, qualified leads, and maximum ROI.',
      },
      {
        title: 'Social Media Marketing',
        description:
          'We build strong brand engagement through strategic content creation, paid campaigns, and community management across leading social media platforms.',
      },
      {
        title: 'Content Marketing',
        description:
          'From blogs to landing pages, we craft compelling content that educates, engages, and converts your audience while supporting long-term SEO growth.',
      },
      {
        title: 'Email Marketing',
        description:
          'Our targeted email campaigns help nurture leads, improve customer retention, and drive consistent conversions with personalized messaging.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description:
          'We analyze user behavior and optimize landing pages to improve engagement, reduce bounce rates, and increase conversion rates.',
      },
    ],
  },

  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity </span>Logics for Digital Marketing Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Data-Driven Marketing Approach',
        content: {
          heading:
            'Marketing strategies backed by real-time data and analytics.',
          desc: `We leverage analytics, performance tracking, and market insights to build
          result-oriented digital marketing campaigns that deliver consistent growth.`,
          points: [
            'In-depth market research',
            'Performance-based optimization',
            'Transparent reporting',
            'Measurable ROI',
          ],
        },
      },
      {
        id: 2,
        title: 'Certified Marketing Experts',
        content: {
          heading: 'Experienced professionals across all digital channels.',
          desc: `Our team consists of certified SEO specialists, PPC managers, and content
          strategists who stay updated with the latest digital marketing trends.`,
          points: [
            'Google & Meta certified experts',
            'Multi-industry experience',
            'Proven campaign success',
          ],
        },
      },
      {
        id: 3,
        title: 'Customized Growth Strategies',
        content: {
          heading: 'Tailored solutions aligned with your business goals.',
          desc: `We don’t believe in one-size-fits-all marketing. Every strategy is customized
          based on your industry, audience, and objectives.`,
          points: [
            'Scalable strategies',
            'Brand-focused growth',
            'Long-term results',
          ],
        },
      },
    ],
  },

  crossPlatformBenefitsTitle:
    'Looking to <span class="text-red capitalize">grow your business</span> with digital marketing?',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected contract' },
    { img: resource, title: 'Dedicated marketing specialists' },
    { img: hiringModal, title: 'Flexible engagement models' },
    { img: refundPolicy, title: 'Transparent pricing structure' },
  ],

  developmentProcess: {
    heading: `<span class="text-red"> Digital Marketing </span> Process`,
    description: `Our structured digital marketing process ensures consistent growth,
    better engagement, and measurable results across all channels.`,
    developmentProcessStep: [
      {
        title: 'Market & Competitor Analysis',
        description:
          'We analyze your market landscape, competitors, and target audience to identify opportunities and define an effective digital marketing strategy.',
      },
      {
        title: 'Goal Setting & KPI Planning',
        description:
          'We set clear marketing objectives, measurable KPIs, and success metrics aligned with your business goals to track performance accurately.',
      },
      {
        title: 'Content & Campaign Strategy',
        description:
          'We craft content strategies, campaign ideas, and communication plans tailored to your audience to maximize engagement and conversions.',
      },
      {
        title: 'Channel Selection & Implementation',
        description:
          'We identify the most effective marketing channels (SEO, social media, PPC, email, etc.) and execute campaigns for maximum reach and ROI.',
      },
      {
        title: 'Monitoring, Analytics & Optimization',
        description:
          'We continuously monitor campaigns, analyze performance metrics, and optimize strategies to ensure consistent growth and improved results.',
      },
    ],
  },

  technologyWeUse: {
    heading: `Tools & Platforms We Use for <span class="text-red"> Digital Marketing</span>`,
    description: `We utilize industry-leading tools to manage, track, and optimize
    digital marketing campaigns efficiently.`,
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'SEO Tools',
        servicesImg: framework,
        servicesItems: [
          'Ahrefs',
          'SEMrush',
          'Google Search Console',
          'Screaming Frog',
        ],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Advertising Platforms',
        servicesImg: tools,
        servicesItems: [
          'Google Ads',
          'Meta Ads',
          'LinkedIn Ads',
          'YouTube Ads',
        ],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Analytics & Tracking',
        servicesImg: database,
        servicesItems: [
          'Google Analytics',
          'Tag Manager',
          'Hotjar',
          'Search Console',
        ],
      },
      {
        bgColor: '#FFD8C0',
        servicesName: 'Marketing Automation',
        servicesImg: plugin,
        servicesItems: ['HubSpot', 'Mailchimp', 'ActiveCampaign', 'Zapier'],
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of how we’ve helped businesses build
scalable and impactful digital products.`,
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
      'Everything you need to know about our digital marketing services.',
    faqs: [
      {
        question: 'How long does it take to see digital marketing results?',
        answer:
          'Results depend on the strategy and channels used. SEO typically takes 3–6 months, while PPC and social ads can deliver faster outcomes.',
      },
      {
        question: 'Do you offer customized digital marketing plans?',
        answer:
          'Yes, all our digital marketing strategies are tailored based on your industry, goals, and target audience.',
      },
      {
        question: 'Which industries do you work with?',
        answer:
          'We work with startups, SMEs, and enterprises across multiple industries including IT, healthcare, retail, and real estate.',
      },
      {
        question: 'How do you measure campaign success?',
        answer:
          'We track KPIs such as traffic, leads, conversions, ROI, and engagement through detailed analytics and reports.',
      },
    ],
  },
};

export const qualityEngineer: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Quality Engineering</span> Services Company`,
    techName: 'Quality Engineering',
    description: `Optimity Logics provides end-to-end Quality Engineering (QA) services to ensure your software products are robust, secure, and high-performing. 
Our QA experts use the latest tools and methodologies to deliver reliable testing solutions for web, mobile, and enterprise applications.`,
    techImg: qa,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Our QA & Testing</span> Services`,
    description: `We provide comprehensive Quality Engineering services, including manual and automated testing, performance testing, security testing, and continuous QA support to ensure your applications meet the highest quality standards.`,
    developmentServices: [
      {
        title: 'Manual Testing',
        description:
          'Our QA team performs detailed manual testing to validate functionality, usability, and user experience across devices and platforms.',
      },
      {
        title: 'Automated Testing',
        description:
          'We implement robust automation frameworks using modern tools to accelerate testing, reduce errors, and ensure repeatable results.',
      },
      {
        title: 'Performance & Load Testing',
        description:
          'We test applications under high load and simulate real-world scenarios to ensure speed, reliability, and scalability.',
      },
      {
        title: 'Security & Compliance Testing',
        description:
          'We identify vulnerabilities and ensure your software complies with industry security standards and regulatory requirements.',
      },
      {
        title: 'Continuous QA & Support',
        description:
          'We provide ongoing quality monitoring, regression testing, and support to keep your applications bug-free and optimized for performance.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity</span> Logics for Quality Engineering Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'End-to-End QA Expertise',
        content: {
          heading: 'Comprehensive QA coverage across the software lifecycle',
          desc: `From requirement validation to post-deployment testing, we ensure your software meets the highest standards of quality, performance, and security.`,
          points: [
            'Manual and automated testing',
            'Performance and security testing',
            'Continuous QA support',
            'Compliance and regulatory testing',
          ],
        },
      },
      {
        id: 2,
        title: 'Experienced QA Team',
        content: {
          heading: 'Certified QA professionals with deep domain knowledge',
          desc: `Our team follows industry best practices and uses advanced tools to deliver reliable, high-quality results across web, mobile, and enterprise applications.`,
          points: [
            'Certified QA engineers',
            'Agile and DevOps-ready processes',
            'Expertise in multiple tools and frameworks',
          ],
        },
      },
      {
        id: 3,
        title: 'Business-Focused Quality',
        content: {
          heading: 'Quality aligned with your business goals',
          desc: `We focus on ensuring your software is reliable, scalable, and user-friendly, helping you achieve higher customer satisfaction and business growth.`,
          points: [
            'Improved user experience',
            'Fewer post-launch issues',
            'Optimized performance and security',
          ],
        },
      },
    ],
  },
  crossPlatformBenefitsTitle:
    'Ensure your software is reliable with our <span class="text-red capitalize"> Quality Engineering </span> services',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected engagement' },
    { img: resource, title: 'Dedicated QA resources' },
    { img: hiringModal, title: 'Flexible engagement models' },
    { img: refundPolicy, title: 'Transparent QA pricing policy' },
  ],
  developmentProcess: {
    heading: `<span class="text-red">Quality Engineering</span> Process`,
    description: `Our structured QA process ensures bug-free, secure, and high-performing applications for web, mobile, and enterprise solutions.`,
    developmentProcessStep: [
      {
        title: 'Requirement & Test Planning',
        description:
          'We review your business and technical requirements to define a comprehensive QA strategy, test plan, and success criteria.',
      },
      {
        title: 'Test Case Design & Preparation',
        description:
          'We design detailed test cases covering functionality, usability, performance, and security to ensure thorough validation of your software.',
      },
      {
        title: 'Manual & Automated Testing',
        description:
          'We execute manual and automated tests to detect bugs, verify features, and ensure the software behaves as expected across all environments.',
      },
      {
        title: 'Performance & Security Testing',
        description:
          'We simulate real-world scenarios to evaluate load, scalability, and security vulnerabilities, ensuring a robust and secure application.',
      },
      {
        title: 'Reporting & Continuous QA Support',
        description:
          'We provide detailed test reports, issue tracking, and ongoing QA support to maintain high quality throughout your software lifecycle.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Projects`,
    description: `A glimpse of how we’ve helped businesses build
scalable and impactful digital products.`,
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
    heading: `Tools & Technologies for <span class="text-red"> Quality Engineering </span>`,
    description:
      'Our QA experts leverage advanced tools and frameworks to deliver reliable testing solutions.',
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Automation Tools',
        servicesImg: framework,
        servicesItems: ['Selenium', 'Cypress', 'Appium', 'TestNG', 'JUnit'],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Performance Testing',
        servicesImg: tools,
        servicesItems: ['JMeter', 'LoadRunner', 'Gatling', 'Locust'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Security Testing',
        servicesImg: database,
        servicesItems: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Acunetix'],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'CI/CD & DevOps',
        servicesImg: dns,
        servicesItems: ['Jenkins', 'GitLab CI/CD', 'Travis CI', 'CircleCI'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'Answers to common questions about our Quality Engineering services.',
    faqs: [
      {
        question: 'What types of testing do you provide?',
        answer:
          'We provide manual, automated, performance, security, and regression testing to ensure high-quality software delivery.',
      },
      {
        question: 'Do you provide QA for mobile applications?',
        answer:
          'Yes, we offer QA services for web, mobile, and enterprise applications across all platforms and devices.',
      },
      {
        question: 'Can you integrate QA into our development process?',
        answer:
          'Absolutely, we follow agile and DevOps practices to integrate QA seamlessly into your development lifecycle.',
      },
      {
        question: 'Do you offer post-deployment QA support?',
        answer:
          'Yes, we provide continuous QA support, monitoring, and optimization even after the product is live.',
      },
    ],
  },
};

export const hireDedicatedDevs: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Hire Dedicated</span> Developers`,
    techName: 'Hire Developer',
    description: `Optimity Logics helps businesses scale their development capabilities by providing dedicated, skilled developers who seamlessly integrate with your in-house team. 
Whether you need short-term support or long-term team augmentation, we deliver experts aligned with your project goals and technical requirements.`,
    techImg: hireDedicatedDev,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">Dedicated Team</span> Services for Your Projects`,
    description: `Our dedicated team services allow you to extend your development capacity without the hassle of hiring, onboarding, and training. 
We provide developers with expertise across web, mobile, backend, and cloud technologies to accelerate your projects and ensure timely delivery.`,
    developmentServices: [
      {
        title: 'Full-Stack Developers',
        description:
          'Hire experienced full-stack developers who can handle end-to-end development of web and mobile applications, ensuring high-quality and scalable solutions.',
      },
      {
        title: 'Frontend & UI/UX Specialists',
        description:
          'Our dedicated frontend developers and UI/UX designers create responsive, interactive, and visually appealing user interfaces for web and mobile platforms.',
      },
      {
        title: 'Backend & API Experts',
        description:
          'Hire backend developers who specialize in building secure, scalable, and high-performance APIs, microservices, and server-side applications.',
      },
      {
        title: 'Mobile App Developers',
        description:
          'Our mobile app experts deliver native and cross-platform applications tailored to your business requirements, covering iOS, Android, and Flutter development.',
      },
      {
        title: 'QA & Testing Engineers',
        description:
          'We provide dedicated QA engineers to ensure bug-free, secure, and high-performing software, covering manual and automated testing across platforms.',
      },
      {
        title: 'DevOps & Cloud Specialists',
        description:
          'Our DevOps experts handle CI/CD, cloud infrastructure, deployment automation, and continuous monitoring to ensure smooth operations and high availability.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity</span> Logics for Dedicated Team Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Flexible Team Engagement',
        content: {
          heading: 'Scale your team as per project requirements',
          desc: `We provide dedicated developers who seamlessly integrate with your in-house team, offering flexibility to scale up or down as needed.`,
          points: [
            'Short-term or long-term support',
            'Seamless team integration',
            'Flexible hiring models',
          ],
        },
      },
      {
        id: 2,
        title: 'Expert Developers',
        content: {
          heading: 'Skilled professionals across technologies',
          desc: `Our developers are experienced in modern tech stacks, frameworks, and tools, ensuring high-quality code and timely delivery for your projects.`,
          points: [
            'Certified and experienced developers',
            'Full-stack, frontend, backend, mobile, and DevOps expertise',
            'Agile development practices',
          ],
        },
      },
      {
        id: 3,
        title: 'Cost-Effective & Transparent',
        content: {
          heading: 'Maximize ROI with dedicated teams',
          desc: `We offer cost-efficient solutions with complete transparency, eliminating recruitment overhead while providing access to top talent.`,
          points: [
            'Transparent pricing',
            'No recruitment or onboarding hassle',
            'Optimized project costs',
          ],
        },
      },
    ],
  },
  crossPlatformBenefitsTitle:
    'Boost your project’s development capacity with our <span class="text-red capitalize"> dedicated developers </span>',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: '100% NDA-protected engagement' },
    { img: resource, title: 'Dedicated and vetted developers' },
    { img: hiringModal, title: 'Flexible engagement models' },
    { img: refundPolicy, title: 'Transparent pricing & policies' },
  ],
  developmentProcess: {
    heading: `<span class="text-red">Dedicated Team</span> Engagement Process`,
    description: `We follow a structured process to onboard your dedicated developers efficiently and align them with your project goals for maximum productivity.`,
    developmentProcessStep: [
      {
        title: 'Requirement & Skill Assessment',
        description:
          'We analyze your project requirements and identify the skill sets needed to match your goals and technology stack.',
      },
      {
        title: 'Candidate Shortlisting',
        description:
          'Our team shortlists highly qualified developers based on expertise, experience, and your specific project requirements.',
      },
      {
        title: 'Onboarding & Integration',
        description:
          'Selected developers are onboarded and integrated into your in-house or remote team for seamless collaboration and communication.',
      },
      {
        title: 'Dedicated Development',
        description:
          'Developers work exclusively on your project, ensuring focus, accountability, and timely delivery aligned with your roadmap.',
      },
      {
        title: 'Monitoring & Support',
        description:
          'We continuously monitor performance, provide reporting, and offer management support to ensure high-quality delivery and long-term success.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore Dedicated Team Projects`,
    description: `See how we’ve helped businesses scale their development teams and deliver projects faster with dedicated developers.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'Dedicated development support to deliver a full-featured rental platform efficiently.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'Team augmentation to accelerate delivery and enhance project quality across web and mobile platforms.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'Dedicated developers integrated seamlessly to deliver scalable, high-performance solutions.',
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Expertise for <span class="text-red"> Dedicated Developers </span>`,
    description:
      'Our dedicated developers have expertise across modern tech stacks and frameworks for web, mobile, backend, and cloud development.',
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frontend & UI/UX',
        servicesImg: framework,
        servicesItems: [
          'React',
          'Angular',
          'Vue.js',
          'Next.js',
          'Tailwind CSS',
        ],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Backend & APIs',
        servicesImg: tools,
        servicesItems: ['Node.js', 'Java', 'Python', 'PHP', '.NET'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Mobile Development',
        servicesImg: database,
        servicesItems: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Java'],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'DevOps & Cloud',
        servicesImg: dns,
        servicesItems: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'Answers to your common queries about hiring dedicated developers.',
    faqs: [
      {
        question: 'How can I hire a dedicated developer?',
        answer:
          'You can hire a developer by sharing your project requirements. We will shortlist suitable candidates and onboard them for your project.',
      },
      {
        question: 'Can I scale the team up or down?',
        answer:
          'Yes, our dedicated team model is flexible, allowing you to scale developers based on project needs.',
      },
      {
        question: 'Are dedicated developers full-time?',
        answer:
          'Yes, dedicated developers work exclusively on your project for a specified duration to ensure focus and accountability.',
      },
      {
        question:
          'Do you provide developers with specific technology expertise?',
        answer:
          'Absolutely. We match developers based on your required skill set, technology stack, and project requirements.',
      },
    ],
  },
};

export const ctoServices: IPropsDataTypes = {
  HeroSectionData: {
    heading: `<span class="text-red">Hire</span> CTO Services`,
    techName: 'CTO Services',
    description: `Optimity Logics provides strategic CTO-as-a-Service to help startups and enterprises make critical technology decisions, scale development teams, and accelerate product growth. 
Our experienced CTOs offer guidance on technology strategy, architecture, team setup, and project execution tailored to your business objectives.`,
    techImg: cto,
    btnName: `Let’s Connect`,
    btnLink: '/schedule-a-call',
  },
  development: {
    heading: `<span class="text-red">CTO</span> Services Tailored to Your Business`,
    description: `Our CTO services empower organizations with executive technology leadership without hiring a full-time CTO. 
From technology strategy and product architecture to team mentoring and process optimization, we ensure your projects succeed technically and strategically.`,
    developmentServices: [
      {
        title: 'Technology Strategy & Advisory',
        description:
          'We define the right technology stack, architecture, and roadmap to ensure your product is scalable, secure, and future-ready.',
      },
      {
        title: 'Product & Architecture Planning',
        description:
          'Our CTOs guide your team in designing robust system architectures, product roadmaps, and feature prioritization aligned with business goals.',
      },
      {
        title: 'Team Building & Mentoring',
        description:
          'We help you hire, structure, and mentor engineering teams, ensuring optimal collaboration, productivity, and skill development.',
      },
      {
        title: 'Process & Development Optimization',
        description:
          'Our experts implement agile methodologies, CI/CD pipelines, and best practices to streamline development and improve delivery quality.',
      },
      {
        title: 'Technical Risk & Budget Management',
        description:
          'We evaluate technical risks, suggest mitigation strategies, and provide guidance on resource allocation, ensuring cost-effective execution.',
      },
      {
        title: 'Innovation & Emerging Technology Guidance',
        description:
          'We identify emerging technologies and recommend innovative solutions to give your product a competitive edge.',
      },
    ],
  },
  WhyOptimityForDevelopment: {
    heading: `<span class="text-red">Why Choose Optimity</span> Logics for CTO Services?`,
    developmentServicesStep: [
      {
        id: 1,
        title: 'Expert Technology Leadership',
        content: {
          heading: 'Access experienced CTOs without full-time hiring',
          desc: `Our CTOs bring years of experience across startups and enterprise projects, helping you make the right technology decisions.`,
          points: [
            'Strategic guidance on tech stack and architecture',
            'Mentorship for your engineering teams',
            'Hands-on technical leadership when needed',
          ],
        },
      },
      {
        id: 2,
        title: 'Scalable & Flexible Engagement',
        content: {
          heading: 'Scale CTO support based on your needs',
          desc: `We offer flexible engagement models—from advisory sessions to dedicated CTO support—tailored to your project size and budget.`,
          points: [
            'Part-time or full-time engagement',
            'Remote or on-site support',
            'Short-term or long-term projects',
          ],
        },
      },
      {
        id: 3,
        title: 'Risk Mitigation & Cost Efficiency',
        content: {
          heading: 'Reduce technical and operational risks',
          desc: `Our CTOs help mitigate project risks, optimize development processes, and ensure cost-effective technology execution.`,
          points: [
            'Identify and manage technical risks early',
            'Optimize development workflows',
            'Improve ROI on technology investments',
          ],
        },
      },
    ],
  },
  crossPlatformBenefitsTitle:
    'Accelerate your product growth with <span class="text-red capitalize"> CTO as a Service </span>',
  crossPlatformBenefitsContactBtn: `Contact Us`,
  crossPlatformBenefitsContactBtnLink: `/contact-us`,
  crossPlatformBenefits: [
    { img: nda, title: 'Confidential & NDA-protected guidance' },
    { img: resource, title: 'Experienced CTOs & technology advisors' },
    { img: hiringModal, title: 'Flexible engagement models' },
    { img: refundPolicy, title: 'Transparent pricing & reporting' },
  ],
  developmentProcess: {
    heading: `<span class="text-red">CTO Services</span> Engagement Process`,
    description: `We follow a structured approach to provide CTO support tailored to your business, ensuring maximum impact and strategic value.`,
    developmentProcessStep: [
      {
        title: 'Initial Assessment & Consultation',
        description:
          'We evaluate your business objectives, current technology stack, and development processes to identify gaps and opportunities.',
      },
      {
        title: 'Technology Strategy Planning',
        description:
          'Our CTO defines the technology roadmap, architecture recommendations, and product strategy aligned with your business goals.',
      },
      {
        title: 'Team Mentorship & Process Setup',
        description:
          'We onboard and mentor your engineering teams, establish agile workflows, CI/CD pipelines, and best practices for efficient execution.',
      },
      {
        title: 'Ongoing CTO Support & Optimization',
        description:
          'Continuous guidance, risk mitigation, technical decision support, and innovation recommendations throughout the project lifecycle.',
      },
    ],
  },
  exploreProjects: {
    heading: `Explore CTO Advisory Projects`,
    description: `See how our CTO-as-a-Service engagements helped businesses optimize technology, build scalable products, and accelerate growth.`,
    buttonName: 'View All',
    buttonLink: '/our-work',
    deployProjects: [
      {
        projectImg: '/webp/project/ricksbeach.webp',
        projectName: 'Ricks Beach Rentals',
        projectDescription:
          'Strategic technology advisory and roadmap planning for a scalable rental platform.',
      },
      {
        projectImg: '/webp/project/hts.webp',
        projectName: 'HTS',
        projectDescription:
          'CTO-led architecture and team mentoring for a web and mobile enterprise project.',
      },
      {
        projectImg: '/webp/project/hopper.webp',
        projectName: 'Hopper',
        projectDescription:
          'End-to-end technology leadership for building a high-performance platform.',
      },
    ],
  },
  technologyWeUse: {
    heading: `Technology Expertise under <span class="text-red"> CTO Guidance </span>`,
    description:
      'Our CTOs provide guidance across modern tech stacks for web, mobile, backend, cloud, and emerging technologies to ensure project success.',
    technologyServices: [
      {
        bgColor: '#FFC0D9',
        servicesName: 'Frontend & UI/UX',
        servicesImg: framework,
        servicesItems: [
          'React',
          'Angular',
          'Vue.js',
          'Next.js',
          'Tailwind CSS',
        ],
      },
      {
        bgColor: '#B5F1CC',
        servicesName: 'Backend & APIs',
        servicesImg: tools,
        servicesItems: ['Node.js', 'Java', 'Python', 'PHP', '.NET'],
      },
      {
        bgColor: '#9FE9F6',
        servicesName: 'Mobile Development',
        servicesImg: database,
        servicesItems: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Java'],
      },
      {
        bgColor: '#D0BFFF',
        servicesName: 'Cloud & DevOps',
        servicesImg: dns,
        servicesItems: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      },
    ],
  },
  Faqs: {
    heading: 'Frequently Asked Questions',
    description: 'Answers to your common queries about CTO as a Service.',
    faqs: [
      {
        question: 'What is CTO as a Service?',
        answer:
          'CTO as a Service provides access to experienced technology leaders who guide your project strategy, architecture, team, and processes without hiring a full-time CTO.',
      },
      {
        question: 'How can a part-time CTO help my business?',
        answer:
          'A part-time CTO provides strategic guidance, technical decision-making, team mentorship, and risk mitigation, enabling your business to grow efficiently.',
      },
      {
        question: 'Can the CTO work with my existing team?',
        answer:
          'Yes, our CTOs integrate seamlessly with your in-house or remote team, mentoring and guiding them throughout the project lifecycle.',
      },
      {
        question: 'Is the engagement flexible?',
        answer:
          'Absolutely. CTO support can be scaled based on your needs, project size, and duration—short-term, long-term, part-time, or full-time.',
      },
      {
        question: 'What industries do you serve?',
        answer:
          'We provide CTO services for startups, SMEs, and enterprise clients across technology, healthcare, finance, e-commerce, and more.',
      },
    ],
  },
};
