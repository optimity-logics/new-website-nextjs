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
  hireJavaScriptDeveloper,
  hireNextDeveloper,
  hireReactDeveloper,
  hireSvelteDeveloper,
  hireTailwindDeveloper,
  hireVueDeveloper,
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
  hireUIUXDesigner,
  hireSoftwareDeveloper,
  hireDevOpsDeveloper,
  hireMERNStackDeveloper,
  hireMEANStackDeveloper,
  hireGameDeveloper,
  hireRemoteDeveloper,
} from './hireTeam/trending/trending';
import { contentful, craftCms, magento, wordpress } from './technology/cms/cms';
import { aws, azure, googleCloud } from './devOps/devOps';
import {
  firebase,
  mongodb,
  mysql,
  postgresql,
  redis,
} from './technology/database/database';
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
    seoKey: 'software_product_development_service',
    data: softwareProductDevelopment,
  },
  'ui-ux-design-service': {
    type: 'default',
    seoKey: 'ui_ux_design_service',
    data: uiuxData,
  },
  'digital-marketing-service': {
    type: 'default',
    seoKey: 'digital_marketing_service',
    data: digitalMarketing,
  },
  'quality-engineering-service': {
    type: 'default',
    seoKey: 'quality_engineering_service',
    data: qualityEngineer,
  },
  'dedicated-team-augmentation-service': {
    type: 'default',
    seoKey: 'dedicated_team_augmentation_service',
    data: hireDedicatedDevs,
  },
  'cto-as-service': {
    type: 'default',
    seoKey: 'cto_as_service',
    data: ctoServices,
  },
  // AI/ML

  'data-science-service': {
    type: 'default',
    seoKey: 'data_science_service',
    data: dataScience,
  },
  'machine-learning-development-service': {
    type: 'default',
    seoKey: 'machine_learning_development_service',
    data: machineLerning,
  },
  'artificial-intelligence-service': {
    type: 'default',
    seoKey: 'artificial_intelligence_service',
    data: artificialIntelligence,
  },
  'robotic-process-automation-service': {
    type: 'default',
    seoKey: 'robotic_process_automation_service',
    data: roboticAutomation,
  },
  'computer-vision-development-service': {
    type: 'default',
    seoKey: 'computer_vision_development_service',
    data: computerVision,
  },
  'generative-ai-development-service': {
    type: 'default',
    seoKey: 'generative_ai_development_service',
    data: generativeAI,
  },
  // Application services

  'web-app-development-service': {
    type: 'default',
    seoKey: 'web_app_development_services',
    data: webAppDevelopment,
  },
  'mobile-app-development-service': {
    type: 'default',
    seoKey: 'mobile_app_development_service',
    data: mobileAppDevelopment,
  },
  'software-development-service': {
    type: 'default',
    seoKey: 'software_development_service',
    data: softwareDevelopment,
  },
  'saas-app-development-service': {
    type: 'default',
    seoKey: 'saas_app_development_service',
    data: saasDevelopment,
  },
  'mvp-development-service': {
    type: 'default',
    seoKey: 'mvp_development_service',
    data: mvpDevelopment,
  },
  'app-modernization-development-service': {
    type: 'default',
    seoKey: 'app_modernization_development_service',
    data: appModernization,
  },
  'game-development-service': {
    type: 'default',
    seoKey: 'game_development_service',
    data: gameDevelopment,
  },

  // solution
  // Industry Expertise

  'healthcare-solutions': {
    type: 'solution',
    seoKey: 'healthcare_solutions',
    data: healthcareData,
  },
  'fintech-solutions': {
    type: 'solution',
    seoKey: 'fintech_solutions',
    data: financeSolution,
  },
  'real-estate-app-development': {
    type: 'solution',
    seoKey: 'real_estate_app_development',
    data: realEstate,
  },
  'ecommerce-solutions': {
    type: 'solution',
    seoKey: 'ecommerce_solutions',
    data: retailSolution,
  },
  'educational-app-development-solutions': {
    type: 'solution',
    seoKey: 'educational_app_development_solutions',
    data: education,
  },
  'logistics-app-development': {
    type: 'solution',
    seoKey: 'logistics_app_development',
    data: logisticsAppDevelopment,
  },
  // Custom Solutions
  'devops-solutions': {
    type: 'solution',
    seoKey: 'devops_solutions',
    data: devOps,
  },
  'cloud-computing-solutions': {
    type: 'solution',
    seoKey: 'cloud_computing_solutions',
    data: cloudComputing,
  },
  'product-prototype-solutions-service': {
    type: 'solution',
    seoKey: 'product_prototype_solutions_service',
    data: productPrototype,
  },
  'on-demand-app-development': {
    type: 'solution',
    seoKey: 'on_demand_app_development',
    data: onDemandApp,
  },
  // Business Focus
  'startup-app-development-service': {
    type: 'solution',
    seoKey: 'startup_app_development_service',
    data: startUpSolution,
  },
  'enterprise-app-development-service': {
    type: 'solution',
    seoKey: 'enterprise_app_development_service',
    data: enterpriseSolution,
  },
  // Technology
  // Mobile Development
  'ios-development-service': {
    type: 'default',
    seoKey: 'ios_development_service',
    data: IosData,
  },

  'android-development-service': {
    type: 'default',
    seoKey: 'android_development_service',
    data: AndroidData,
  },

  'react-native-development-service': {
    type: 'default',
    seoKey: 'react_native_development_service',
    data: ReactNative,
  },

  'flutter-development-service': {
    type: 'default',
    seoKey: 'flutter_development_service',
    data: FlutterData,
  },
  // Frontend Development
  'next-js-development-service': {
    type: 'default',
    seoKey: 'next_js_development_service',
    data: NextJsData,
  },

  'react-js-development-service': {
    type: 'default',
    seoKey: 'react_js_development_service',
    data: ReactJsData,
  },

  'angular-js-development-service': {
    type: 'default',
    seoKey: 'angular_js_development_service',
    data: AngularData,
  },

  'vue-js-development-service': {
    type: 'default',
    seoKey: 'vue_js_development_service',
    data: VueData,
  },

  'svelte-js-development-service': {
    type: 'default',
    seoKey: 'svelte_js_development_service',
    data: SvelteJsData,
  },

  'javascript-development-service': {
    type: 'default',
    seoKey: 'javascript_development_service',
    data: JavaScriptData,
  },
  // Backend Development
  'python-development-service': {
    type: 'default',
    seoKey: 'python_development_service',
    data: PythonData,
  },

  'golang-development-service': {
    type: 'default',
    seoKey: 'golang_development_service',
    data: GolangData,
  },

  'node-js-development-service': {
    type: 'default',
    seoKey: 'nodejs_development_service',
    data: NodeData,
  },

  'laravel-development-service': {
    type: 'default',
    seoKey: 'laravel_development_service',
    data: LaravelData,
  },

  'php-development-service': {
    type: 'default',
    seoKey: 'php_development_service',
    data: PhpData,
  },
  // CMS Development
  'wordpress-development-service': {
    type: 'default',
    seoKey: 'wordpress_development_service',
    data: wordpress,
  },

  'contentful-development-service': {
    type: 'default',
    seoKey: 'contentful_development_service',
    data: contentful,
  },

  'craft-cms-development-service': {
    type: 'default',
    seoKey: 'craft_cms_service',
    data: craftCms,
  },

  'magento-development-service': {
    type: 'default',
    seoKey: 'magento_cms_service',
    data: magento,
  },
  'drupal-development-service': {
    type: 'default',
    seoKey: 'magento_cms_service',
    data: magento,
  },
  // database
  'mysql-development-service': {
    type: 'default',
    seoKey: 'mysql_development_service',
    data: mysql,
  },

  'postgre-sql-development-service': {
    type: 'default',
    seoKey: 'postgresql_development_service',
    data: postgresql,
  },

  'mongo-db-development-service': {
    type: 'default',
    seoKey: 'mongodb_development_service',
    data: mongodb,
  },

  'redis-development-service': {
    type: 'default',
    seoKey: 'redis_development_service',
    data: redis,
  },

  'firebase-development-service': {
    type: 'default',
    seoKey: 'firebase_development_service',
    data: firebase,
  },
  // DevOps
  'aws-development-service': {
    type: 'default',
    seoKey: 'aws_development_service',
    data: aws,
  },

  'google-development-service': {
    type: 'default',
    seoKey: 'google_development_service',
    data: googleCloud,
  },

  'azure-development-service': {
    type: 'default',
    seoKey: 'azure_development_service',
    data: azure,
  },
  // Trending

  'tailwind-css-development-service': {
    type: 'default',
    seoKey: 'tailwind_css_development_service',
    data: tailwindData,
  },

  // Data & AI
  'hire-ai-developers': {
    type: 'hire',
    seoKey: 'hire_ai_developers',
    data: hireAIDeveloper,
  },

  'hire-machine-learning-developers': {
    type: 'hire',
    seoKey: 'hire_machine_learning_developers',
    data: hireMLDeveloper,
  },

  'hire-data-scientists-developers': {
    type: 'hire',
    seoKey: 'hire_data_scientists_developers',
    data: hireDataScientist,
  },
  // Mobile Developers
  'hire-ios-developers': {
    type: 'hire',
    seoKey: 'hire_ios_developers',
    data: hireIosDeveloper,
  },

  'hire-android-developers': {
    type: 'hire',
    seoKey: 'hire_android_developers',
    data: hireAndroidDeveloper,
  },

  'hire-react-native-developers': {
    type: 'hire',
    seoKey: 'hire_react_native_developers',
    data: hireReactNativeDeveloper,
  },

  'hire-flutter-developers': {
    type: 'hire',
    seoKey: 'hire_flutter_developers',
    data: hireFlutterDeveloper,
  },

  'hire-swift-developers': {
    type: 'hire',
    seoKey: 'hire_swift_developers',
    data: hireSwiftDeveloper,
  },

  'hire-iconic-developers': {
    type: 'hire',
    seoKey: 'hire_iconic_developers',
    data: hireIconicDeveloper,
  },
  // Frontend Developers
  'hire-next-js-developers': {
    type: 'hire',
    seoKey: 'hire_next_js_developers',
    data: hireNextDeveloper,
  },

  'hire-react-js-developers': {
    type: 'hire',
    seoKey: 'hire_react_js_developers',
    data: hireReactDeveloper,
  },

  'hire-angular-js-developers': {
    type: 'hire',
    seoKey: 'hire_angular_js_developers',
    data: hireAngularDeveloper,
  },

  'hire-vue-js-developers': {
    type: 'hire',
    seoKey: 'hire_vue_js_developers',
    data: hireVueDeveloper,
  },

  'hire-svelte-js-developers': {
    type: 'hire',
    seoKey: 'hire_backbone_js_developers',
    data: hireSvelteDeveloper,
  },

  'hire-javascript-developers': {
    type: 'hire',
    seoKey: 'hire_javascript_developers',
    data: hireJavaScriptDeveloper,
  },

  'hire-tailwind-css-developers': {
    type: 'hire',
    seoKey: 'hire_tailwind_css_developers',
    data: hireTailwindDeveloper,
  },

  // Backend Developers
  'hire-python-developers': {
    type: 'hire',
    seoKey: 'hire_python_developers',
    data: hirePythonDeveloper,
  },

  'hire-fastapi-developers': {
    type: 'hire',
    seoKey: 'hire_fastapi_developers',
    data: hireFastApiDeveloper,
  },

  'hire-django-developers': {
    type: 'hire',
    seoKey: 'hire_django_developers',
    data: hireDjangoDeveloper,
  },

  'hire-flask-developers': {
    type: 'hire',
    seoKey: 'hire_flask_developers',
    data: hireFlaskDeveloper,
  },

  'hire-golang-developers': {
    type: 'hire',
    seoKey: 'hire_golang_developers',
    data: hireGoLangDeveloper,
  },

  'hire-node-js-developers': {
    type: 'hire',
    seoKey: 'hire_node_js_developers',
    data: hireNodeJSDeveloper,
  },

  'hire-laravel-developers': {
    type: 'hire',
    seoKey: 'hire_laravel_developers',
    data: hireLaravelDeveloper,
  },

  'hire-php-developers': {
    type: 'hire',
    seoKey: 'hire_php_developers',
    data: hirePhpDeveloper,
  },
  // Trending
  'hire-remote-developers': {
    type: 'hire',
    seoKey: 'hire_unreal_app_developers',
    data: hireRemoteDeveloper,
  },

  'hire-ui-ux-developers': {
    type: 'hire',
    seoKey: 'hire_ui_ux_developers',
    data: hireUIUXDesigner,
  },

  'hire-software-developers': {
    type: 'hire',
    seoKey: 'hire_software_developers',
    data: hireSoftwareDeveloper,
  },

  'hire-devops-developers': {
    type: 'hire',
    seoKey: 'hire_devops_developers',
    data: hireDevOpsDeveloper,
  },

  'hire-mern-stack-developers': {
    type: 'hire',
    seoKey: 'hire_mern_stack_developers',
    data: hireMERNStackDeveloper,
  },

  'hire-mean-stack-developers': {
    type: 'hire',
    seoKey: 'hire_mean_stack_developers',
    data: hireMEANStackDeveloper,
  },

  'hire-game-developers': {
    type: 'hire',
    seoKey: 'hire_game_developers',
    data: hireGameDeveloper,
  },
};
