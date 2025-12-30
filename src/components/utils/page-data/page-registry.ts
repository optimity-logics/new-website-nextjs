import { IPropsDataTypes } from '@/components/type/type';
import { IHireUsPageType } from '@/components/type/hireUs/hireUsType';
import { IsolutionsPage } from '@/components/type/solution/solutionType';
import {
  hireAndroidDeveloper,
  hireFlutterDeveloper,
  hireIconicDeveloper,
  hireIosDeveloper,
  hireReactNativeDeveloper,
  hireSwiftDeveloper,
} from './hireTeam/mobileApp/mobileApp';
import {
  webAppDevelopment,
  mobileAppDevelopment,
  appModernization,
  gameDevelopment,
  mvpDevelopment,
  saasDevelopment,
  softwareDevelopment,
} from './services/applicationDevelopment/applicationDevelopment';
import {
  education,
  financeSolution,
  healthcareData,
  logisticsAppDevelopment,
  realEstate,
  retailSolution,
} from './solution/IndustryExpertise/IndustryExpertise';
import { FlutterData } from './technology/mobile/flutter';
import {
  softwareProductDevelopment,
  uiuxData,
  digitalMarketing,
  qualityEngineer,
  ctoServices,
  hireDedicatedDevs,
} from './services/digitalTransformation/digitalTransformation';
import {
  dataScience,
  machineLerning,
  artificialIntelligence,
  roboticAutomation,
  computerVision,
  generativeAI,
} from './services/dataAndAI/dataAndAi';
import {
  cloudComputing,
  devOps,
  onDemandApp,
  productPrototype,
} from './solution/ customSolutions/customSolution';
import {
  startUpSolution,
  enterpriseSolution,
} from './solution/businessScales/businessScales';
import { AndroidData } from './technology/mobile/android';
import { ReactNative } from './technology/mobile/reactNative';
import { IosData } from './technology/mobile/Ios';
import { AngularData } from './technology/front-end/angularJs';
import { ReactJsData } from './technology/front-end/reactJs';
import { VueData } from './technology/front-end/vueJs';
import { SvelteJsData } from './technology/front-end/svelteJs';
import { JavaScriptData } from './technology/front-end/javascript';
import { NextJsData } from './technology/front-end/nextJs';
import { GolangData } from './technology/back-end/golang';
import { LaravelData } from './technology/back-end/laravel';
import { NodeData } from './technology/back-end/node';
import { PhpData } from './technology/back-end/php';
import { PythonData } from './technology/back-end/python';
import { tailwindData } from './technology/trending/tailwindcss';
import {
  hireAIDeveloper,
  hireDataScientist,
  hireMLDeveloper,
} from './hireTeam/dataAndAI/DataAndAI';
import {
  hireAngularDeveloper,
  hireBackboneDeveloper,
  hireJavaScriptDeveloper,
  hireNextDeveloper,
  hireReactDeveloper,
  hireTailwindDeveloper,
  hireVueDeveloper,
  hireWebflowDeveloper,
} from './hireTeam/frontend/frontend';
import {
  hireDjangoDeveloper,
  hireFastApiDeveloper,
  hireFlaskDeveloper,
  hireGoLangDeveloper,
  hireLaravelDeveloper,
  hireNodeJSDeveloper,
  hirePhpDeveloper,
  hirePythonDeveloper,
} from './hireTeam/backend/backend';
import {
  hireUnrealEngineDeveloper,
  hireUIUXDesigner,
  hireSoftwareDeveloper,
  hireDevOpsDeveloper,
  hireMERNStackDeveloper,
  hireMEANStackDeveloper,
  hireGameDeveloper,
} from './hireTeam/trending/trending';
import { contentful, craftCms, magento, wordpress } from './technology/cms/cms';
import { aws, azure, googleCloud } from './devOps/devOps';
export type PageType = 'hire' | 'solution' | 'default';

export type PageData = IPropsDataTypes | IHireUsPageType | IsolutionsPage;

export interface PageConfig {
  type: PageType;
  seoKey: keyof typeof import('@/components/utils/seo/TitleAndDescription').SEO;
  data: PageData;
}

export const PAGE_REGISTRY: Record<string, PageConfig> = {
  // solution
  // Digital Services
  'software-product-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: softwareProductDevelopment,
  },
  'ui-ux-design-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: uiuxData,
  },
  'digital-marketing-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: digitalMarketing,
  },
  'quality-engineering-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: qualityEngineer,
  },
  'dedicated-team-augmentation-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: hireDedicatedDevs,
  },
  'cto-as-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: ctoServices,
  },
  // AI/ML

  'data-science-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: dataScience,
  },
  'machine-learning-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: machineLerning,
  },
  'artificial-intelligence-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: artificialIntelligence,
  },
  'robotic-process-automation-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: roboticAutomation,
  },
  'computer-vision-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: computerVision,
  },
  'generative-ai-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: generativeAI,
  },
  // Application services

  'web-app-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: webAppDevelopment,
  },
  'mobile-app-development': {
    type: 'default',
    seoKey: 'mobile_app_development_services',
    data: mobileAppDevelopment,
  },
  'software-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: softwareDevelopment,
  },
  'saas-app-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: saasDevelopment,
  },
  'mvp-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: mvpDevelopment,
  },
  'app-modernization-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: appModernization,
  },
  'game-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: gameDevelopment,
  },

  // solution
  // Industry Expertise

  'healthcare-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: healthcareData,
  },
  'fintech-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: financeSolution,
  },
  'real-estate-app-development': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: realEstate,
  },
  'ecommerce-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: retailSolution,
  },
  'educational-app-development-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: education,
  },
  'logistics-app-development': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: logisticsAppDevelopment,
  },
  // Custom Solutions
  'devops-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: devOps,
  },
  'cloud-computing-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: cloudComputing,
  },
  'product-prototype-solutions-service': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: productPrototype,
  },
  'on-demand-app-development': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: onDemandApp,
  },
  // Business Focus
  'startup-app-development-service': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: startUpSolution,
  },
  'enterprise-app-development-service': {
    type: 'solution',
    seoKey: 'healthcare_solution',
    data: enterpriseSolution,
  },
  // Technology
  // Mobile Development
  'ios-development-service': {
    type: 'default',
    seoKey: 'mobile_app_development_services',
    data: IosData,
  },

  'android-development-service': {
    type: 'default',
    seoKey: 'mobile_app_development_services',
    data: AndroidData,
  },

  'react-native-development-service': {
    type: 'default',
    seoKey: 'mobile_app_development_services',
    data: ReactNative,
  },

  'flutter-development-service': {
    type: 'default',
    seoKey: 'mobile_app_development_services',
    data: FlutterData,
  },
  // Frontend Development
  'next-js-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: NextJsData,
  },

  'react-js-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: ReactJsData,
  },

  'angular-js-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: AngularData,
  },

  'vue-js-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: VueData,
  },

  'svelte-js-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: SvelteJsData,
  },

  'javascript-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: JavaScriptData,
  },
  // Backend Development
  'python-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: PythonData,
  },

  'golang-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: GolangData,
  },

  'node-js-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: NodeData,
  },

  'laravel-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: LaravelData,
  },

  'php-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: PhpData,
  },
  // CMS Development
  'wordpress-service': {
    type: 'default',
    seoKey: 'technology',
    data: wordpress,
  },

  'contentful-cloud-service': {
    type: 'default',
    seoKey: 'technology',
    data: contentful,
  },

  'craft-cms-service': {
    type: 'default',
    seoKey: 'technology',
    data: craftCms,
  },

  'magento-cms-service': {
    type: 'default',
    seoKey: 'technology',
    data: magento,
  },
  // DevOps
  'AWS-service': {
    type: 'default',
    seoKey: 'technology',
    data: aws,
  },

  'google-cloud-service': {
    type: 'default',
    seoKey: 'technology',
    data: googleCloud,
  },

  'azure-service': {
    type: 'default',
    seoKey: 'technology',
    data: azure,
  },
  // Trending

  'tailwind-css-development-service': {
    type: 'default',
    seoKey: 'technology',
    data: tailwindData,
  },

  // Data & AI
  'hire-ai-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireAIDeveloper,
  },

  'hire-machine-learning-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireMLDeveloper,
  },

  'hire-data-scientists-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireDataScientist,
  },
  // Mobile Developers
  'hire-ios-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireIosDeveloper,
  },

  'hire-android-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireAndroidDeveloper,
  },

  'hire-react-native-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireReactNativeDeveloper,
  },

  'hire-flutter-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireFlutterDeveloper,
  },

  'hire-swift-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireSwiftDeveloper,
  },

  'hire-iconic-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireIconicDeveloper,
  },
  // Frontend Developers
  'hire-next-js-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireNextDeveloper,
  },

  'hire-react-js-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireReactDeveloper,
  },

  'hire-angular-js-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireAngularDeveloper,
  },

  'hire-vue-js-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireVueDeveloper,
  },

  'hire-backbone-js-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireBackboneDeveloper,
  },

  'hire-javascript-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireJavaScriptDeveloper,
  },

  'hire-tailwind-css-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireTailwindDeveloper,
  },

  'hire-webflow-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireWebflowDeveloper,
  },
  // Backend Developers
  'hire-python-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hirePythonDeveloper,
  },

  'hire-fastapi-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireFastApiDeveloper,
  },

  'hire-django-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireDjangoDeveloper,
  },

  'hire-flask-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireFlaskDeveloper,
  },

  'hire-golang-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireGoLangDeveloper,
  },

  'hire-node-js-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireNodeJSDeveloper,
  },

  'hire-laravel-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireLaravelDeveloper,
  },

  'hire-php-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hirePhpDeveloper,
  },
  // Trending
  'hire-unreal-app-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireUnrealEngineDeveloper,
  },

  'hire-ui-ux-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireUIUXDesigner,
  },

  'hire-software-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireSoftwareDeveloper,
  },

  'hire-devops-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireDevOpsDeveloper,
  },

  'hire-mern-stack-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireMERNStackDeveloper,
  },

  'hire-mean-stack-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireMEANStackDeveloper,
  },

  'hire-game-developers': {
    type: 'hire',
    seoKey: 'hire_us',
    data: hireGameDeveloper,
  },
};
