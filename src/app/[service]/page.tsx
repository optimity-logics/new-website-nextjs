import AllPageContent from '@/components/pages/AllPageContent';
import HireUs from '@/components/pages/HireUs';
import Solution from '@/components/pages/Solution';
import { Metadata } from 'next';

// ===================== DATA IMPORTS =====================
// backend
import { GolangData } from '@/components/utils/page-data/technology/back-end/golang';
import { LaravelData } from '@/components/utils/page-data/technology/back-end/laravel';
import { MeteorData } from '@/components/utils/page-data/technology/back-end/meteor';
import { NodeData } from '@/components/utils/page-data/technology/back-end/node';
import { PhpData } from '@/components/utils/page-data/technology/back-end/php';
import { PythonData } from '@/components/utils/page-data/technology/back-end/python';

// frontend
import { AngularData } from '@/components/utils/page-data/technology/front-end/angularJs';
import { BackboneJsData } from '@/components/utils/page-data/technology/front-end/backboneJs';
import { JavaScriptData } from '@/components/utils/page-data/technology/front-end/javascript';
import { NextJsData } from '@/components/utils/page-data/technology/front-end/nextJs';
import { ReactJsData } from '@/components/utils/page-data/technology/front-end/reactJs';
import { VueData } from '@/components/utils/page-data/technology/front-end/vueJs';

// mobile
import { AndroidData } from '@/components/utils/page-data/technology/mobile/android';
import { FlutterData } from '@/components/utils/page-data/technology/mobile/flutter';
import { Iconic } from '@/components/utils/page-data/technology/mobile/iconic';
import { IosData } from '@/components/utils/page-data/technology/mobile/Ios';
import { ReactNative } from '@/components/utils/page-data/technology/mobile/reactNative';
import { SwiftData } from '@/components/utils/page-data/technology/mobile/swift';

// trending
import { weareableAppData } from '@/components/utils/page-data/technology/trending/wearableApp';
import { internetOfThingsData } from '@/components/utils/page-data/technology/trending/iot';
import { tailwindData } from '@/components/utils/page-data/technology/trending/tailwindcss';

// services
import {
  ctoServices,
  digitalMarketing,
  hireDedicatedDevs,
  qualityEngineer,
  softwareProductDevelopment,
  uiuxData,
} from '@/components/utils/page-data/services/digitalTransformation/digitalTransformation';

import {
  artificialIntelligence,
  computerVision,
  dataScience,
  generativeAI,
  machineLerning,
  roboticAutomation,
} from '@/components/utils/page-data/services/dataAndAI/dataAndAi';

import {
  appModernization,
  gameDevelopment,
  mobileAppDevelopment,
  mvpDevelopment,
  saasDevelopment,
  softwareDevelopment,
  webAppDevelopment,
} from '@/components/utils/page-data/services/applicationDevelopment/applicationDevelopment';

// solutions
import {
  education,
  financeSolution,
  healthcareData,
  logisticsAppDevelopment,
  realEstate,
  retailSolution,
} from '@/components/utils/page-data/solution/IndustryExpertise/IndustryExpertise';

import {
  cloudComputing,
  devOps,
  onDemandApp,
  productPrototype,
} from '@/components/utils/page-data/solution/ customSolutions/customSolution';

import {
  enterpriseSolution,
  startUpSolution,
} from '@/components/utils/page-data/solution/businessScales/businessScales';

// hire team
import {
  hireAIDeveloper,
  hireDataScientist,
  hireMLDeveloper,
} from '@/components/utils/page-data/hireTeam/dataAndAI/DataAndAI';

import {
  hireAndroidDeveloper,
  hireFlutterDeveloper,
  hireIconicDeveloper,
  hireIosDeveloper,
  hireReactNativeDeveloper,
  hireSwiftDeveloper,
} from '@/components/utils/page-data/hireTeam/mobileApp/mobileApp';

import {
  hireAngularDeveloper,
  hireBackboneJs,
  hireJavascriptDeveloper,
  hireNextDeveloper,
  hireReactDeveloper,
  hireTailwindCssDeveloper,
  hireVueDeveloper,
  hireWebflowDeveloper,
} from '@/components/utils/page-data/hireTeam/frontend/frontend';

import {
  hireDjangoDeveloper,
  hireFastApiDeveloper,
  hireFlaskDeveloper,
  hireGoLangDeveloper,
  hireLaravelDeveloper,
  hireNodeJSDeveloper,
  hirePhpDeveloper,
  hirePythonDeveloper,
} from '@/components/utils/page-data/hireTeam/backend/backend';

import {
  hireDevOpsDeveloper,
  hireGameDeveloper,
  hireMEANStackDeveloper,
  hireMERNStackDeveloper,
  hireSoftwareDeveloper,
  hireUIUXDesigner,
  hireUnrealEngineDeveloper,
} from '@/components/utils/page-data/hireTeam/trending/trending';

// seo
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';

// types
import { IPropsDataTypes } from '@/components/type/type';
import { IsolutionsPage } from '@/components/type/solution/solutionType';
import { IHireUsPageType } from '@/components/type/hireUs/hireUsType';

// ===================== ROUTE DATA MAP =====================
const dataMap = {
  flutter: FlutterData,
  ios: IosData,
  swift: SwiftData,
  'react-native': ReactNative,
  iconic: Iconic,
  android: AndroidData,

  next: NextJsData,
  'react-js': ReactJsData,
  angular: AngularData,
  vue: VueData,
  backbone: BackboneJsData,
  javascript: JavaScriptData,

  node: NodeData,
  python: PythonData,
  golang: GolangData,
  php: PhpData,
  laravel: LaravelData,
  meteor: MeteorData,

  wearable: weareableAppData,
  internet: internetOfThingsData,
  tailwind: tailwindData,

  software: softwareProductDevelopment,
  ui: uiuxData,
  digital: digitalMarketing,
  quality: qualityEngineer,
  dedicated: hireDedicatedDevs,
  cto: ctoServices,

  data: dataScience,
  machine: machineLerning,
  artificial: artificialIntelligence,
  robotic: roboticAutomation,
  computer: computerVision,
  generative: generativeAI,

  web: webAppDevelopment,
  mobile: mobileAppDevelopment,
  'software-development': softwareDevelopment,
  saas: saasDevelopment,
  mvp: mvpDevelopment,
  app: appModernization,
  game: gameDevelopment,

  healthcare: healthcareData,
  fintech: financeSolution,
  real: realEstate,
  ecommerce: retailSolution,
  educational: education,
  logistics: logisticsAppDevelopment,
  devops: devOps,
  cloud: cloudComputing,
  product: productPrototype,
  on: onDemandApp,
  startup: startUpSolution,
  enterprise: enterpriseSolution,

  'hire-ai': hireAIDeveloper,
  'hire-machine': hireMLDeveloper,
  'hire-data': hireDataScientist,
  'hire-flutter': hireFlutterDeveloper,
  'hire-ios': hireIosDeveloper,
  'hire-android': hireAndroidDeveloper,
  'hire-react-native': hireReactNativeDeveloper,
  'hire-swift': hireSwiftDeveloper,
  'hire-iconic': hireIconicDeveloper,

  'hire-react': hireReactDeveloper,
  'hire-angular': hireAngularDeveloper,
  'hire-vue': hireVueDeveloper,
  'hire-next': hireNextDeveloper,
  'hire-javascript': hireJavascriptDeveloper,
  'hire-backbone': hireBackboneJs,
  'hire-tailwind': hireTailwindCssDeveloper,
  'hire-webflow': hireWebflowDeveloper,

  'hire-python': hirePythonDeveloper,
  'hire-fastapi': hireFastApiDeveloper,
  'hire-django': hireDjangoDeveloper,
  'hire-flask': hireFlaskDeveloper,
  'hire-golang': hireGoLangDeveloper,
  'hire-node': hireNodeJSDeveloper,
  'hire-php': hirePhpDeveloper,
  'hire-laravel': hireLaravelDeveloper,

  'hire-unreal': hireUnrealEngineDeveloper,
  'hire-ui': hireUIUXDesigner,
  'hire-software': hireSoftwareDeveloper,
  'hire-devops': hireDevOpsDeveloper,
  'hire-mern': hireMERNStackDeveloper,
  'hire-mean': hireMEANStackDeveloper,
  'hire-game': hireGameDeveloper,
} as const;

type ServiceKey = keyof typeof dataMap;

// ===================== HELPERS =====================
const SOLUTION_KEYS: ServiceKey[] = [
  'healthcare',
  'fintech',
  'real',
  'ecommerce',
  'educational',
  'logistics',
  'devops',
  'cloud',
  'product',
  'on',
  'startup',
  'enterprise',
];

const resolveMainService = (service: string): ServiceKey => {
  if (service.startsWith('hire-')) {
    return service.split('-').slice(0, 2).join('-') as ServiceKey;
  }
  return service.split('-')[0] as ServiceKey;
};

const resolvePageType = (service: string, main: ServiceKey) => {
  if (service.startsWith('hire-')) return 'hire';
  if (SOLUTION_KEYS.includes(main)) return 'solution';
  return 'content';
};

// ===================== SEO =====================
const SEO_RULES: { match: RegExp; seoKey: keyof typeof SEO }[] = [
  { match: /^(web|software)/, seoKey: 'web_app_development_services' },
  {
    match: /^(mobile|saas|app|ios|android|react-native|flutter|swift|iconic)/,
    seoKey: 'mobile_app_development_services',
  },
  {
    match: /^(next|react|angular|vue|backbone|javascript|svelte)/,
    seoKey: 'frontend_technology',
  },
  {
    match: /^(python|golang|node|laravel|php|meteor)/,
    seoKey: 'backend_technology',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const rule = SEO_RULES.find((r) => r.match.test(service));

  if (!rule) {
    return {
      title: 'Optimity Logics',
      description: 'Digital Transformation & App Development Company',
    };
  }

  const seo = SEO[rule.seoKey];

  return generateSEOMetadata({
    title: seo.title,
    description: seo.description,
    og_url: `https://optimitylogics.com/${service}`,
    og_image:
      'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
  });
}

// ===================== PAGE =====================
const SubcategoryPage = async ({
  params,
}: {
  params: Promise<{ service: string }>;
}) => {
  const { service } = await params;

  const mainService = resolveMainService(service);
  const pageData = dataMap[mainService];

  if (!pageData) return <p>Data not found</p>;

  const pageType = resolvePageType(service, mainService);

  if (pageType === 'hire') {
    return <HireUs data={pageData as IHireUsPageType} />;
  }

  if (pageType === 'solution') {
    return <Solution data={pageData as IsolutionsPage} />;
  }

  return <AllPageContent data={pageData as IPropsDataTypes} />;
};

export default SubcategoryPage;
