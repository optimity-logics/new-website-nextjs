import AllPageContent from '@/components/ui/AllPageContent';
import { GolangData } from '@/components/utils/technology/back-end/golang';
import { LaravelData } from '@/components/utils/technology/back-end/laravel';
import { MeteorData } from '@/components/utils/technology/back-end/meteor';
import { NodeData } from '@/components/utils/technology/back-end/node';
import { PhpData } from '@/components/utils/technology/back-end/php';
import { PythonData } from '@/components/utils/technology/back-end/python';
import { AngularData } from '@/components/utils/technology/front-end/angularJs';
import { BackboneJsData } from '@/components/utils/technology/front-end/backboneJs';
import { JavaScriptData } from '@/components/utils/technology/front-end/javascript';
import { NextJsData } from '@/components/utils/technology/front-end/nextJs';
import { VueData } from '@/components/utils/technology/front-end/vueJs';
import { AndroidData } from '@/components/utils/technology/mobile/android';
import { FlutterData } from '@/components/utils/technology/mobile/flutter';
import { Iconic } from '@/components/utils/technology/mobile/iconic';
import { IosData } from '@/components/utils/technology/mobile/Ios';
import { ReactNative } from '@/components/utils/technology/mobile/reactNative';
import { SwiftData } from '@/components/utils/technology/mobile/swift';
import { ReactJsData } from '@/components/utils/technology/front-end/reactJs';
import {
  ctoServices,
  digitalMarketing,
  hireDedicatedDevs,
  qualityEngineer,
  softwareProductDevelopment,
  uiuxData,
} from '@/components/utils/services/digitalTransformation/digitalTransformation';
import {
  artificialIntelligence,
  computerVision,
  dataScience,
  generativeAI,
  machineLerning,
  roboticAutomation,
} from '@/components/utils/services/dataAndAI/dataAndAi';
import {
  appModernization,
  gameDevelopment,
  mobileAppDevelopment,
  mvpDevelopment,
  saasDevelopment,
  softwareDevelopment,
  webAppDevelopment,
} from '@/components/utils/services/applicationDevelopment/applicationDevelopment';
import {
  education,
  financeSolution,
  healthcareData,
  logisticsAppDevelopment,
  realEstate,
  retailSolution,
} from '@/components/utils/solution/IndustryExpertise/IndustryExpertise';
import {
  cloudComputing,
  devOps,
  onDemandApp,
  productPrototype,
} from '@/components/utils/solution/ customSolutions/customSolution';
import {
  enterpriseSolution,
  startUpSolution,
} from '@/components/utils/solution/businessScales/businessScales';
import {
  hireAIDeveloper,
  hireDataScientist,
  hireMLDeveloper,
} from '@/components/utils/hireTeam/dataAndAI/DataAndAI';
import {
  hireAndroidDeveloper,
  hireFlutterDeveloper,
  hireIconicDeveloper,
  hireIosDeveloper,
  hireReactNativeDeveloper,
  hireSwiftDeveloper,
} from '@/components/utils/hireTeam/mobileApp/mobileApp';
import {
  hireAngularDeveloper,
  hireBackboneJs,
  hireJavascriptDeveloper,
  hireNextDeveloper,
  hireReactDeveloper,
  hireTailwindCssDeveloper,
  hireVueDeveloper,
  hireWebflowDeveloper,
} from '@/components/utils/hireTeam/frontend/frontend';
import {
  hireDjangoDeveloper,
  hireFastApiDeveloper,
  hireFlaskDeveloper,
  hireGoLangDeveloper,
  hireLaravelDeveloper,
  hireNodeJSDeveloper,
  hirePhpDeveloper,
  hirePythonDeveloper,
} from '@/components/utils/hireTeam/backend/backend';
import {
  hireDevOpsDeveloper,
  hireGameDeveloper,
  hireMEANStackDeveloper,
  hireMERNStackDeveloper,
  hireSoftwareDeveloper,
  hireUIUXDesigner,
  hireUnrealEngineDeveloper,
} from '@/components/utils/hireTeam/trending/trending';
import { weareableAppData } from '@/components/utils/technology/trending/wearableApp';
import { internetOfThingsData } from '@/components/utils/technology/trending/iot';
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/utils/MetaData';
import { SEO } from '@/components/utils/TitleAndDescription';
import HireUs from '@/components/division/HireUs';
import Solution from '@/components/division/Solution';
import { tailwindData } from '@/components/utils/technology/trending/tailwindcss';

type Params = Promise<{ service: string }>;

const dataMap = {
  // mobile
  flutter: FlutterData,
  ios: IosData,
  swift: SwiftData,
  'react-native': ReactNative,
  iconic: Iconic,
  android: AndroidData,
  // front-end
  next: NextJsData,
  'react-js': ReactJsData,
  angular: AngularData,
  vue: VueData,
  backbone: BackboneJsData,
  javascript: JavaScriptData,
  // back-end
  node: NodeData,
  python: PythonData,
  golang: GolangData,
  php: PhpData,
  laravel: LaravelData,
  meteor: MeteorData,
  // Trending
  wearable: weareableAppData,
  internet: internetOfThingsData,
  tailwind: tailwindData,
  // services
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
  // solution
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
  // hire devs
  // mobile
  'hire-ai': hireAIDeveloper,
  'hire-machine': hireMLDeveloper,
  'hire-data': hireDataScientist,
  'hire-flutter': hireFlutterDeveloper,
  'hire-ios': hireIosDeveloper,
  'hire-android': hireAndroidDeveloper,
  'hire-react-native': hireReactNativeDeveloper,
  'hire-swift': hireSwiftDeveloper,
  'hire-iconic': hireIconicDeveloper,
  // front-end
  'hire-react': hireReactDeveloper,
  'hire-angular': hireAngularDeveloper,
  'hire-vue': hireVueDeveloper,
  'hire-next': hireNextDeveloper,
  'hire-javascript': hireJavascriptDeveloper,
  'hire-backbone': hireBackboneJs,
  'hire-tailwind': hireTailwindCssDeveloper,
  'hire-webflow': hireWebflowDeveloper,
  // back-end
  'hire-python': hirePythonDeveloper,
  'hire-fastapi': hireFastApiDeveloper,
  'hire-django': hireDjangoDeveloper,
  'hire-flask': hireFlaskDeveloper,
  'hire-golang': hireGoLangDeveloper,
  'hire-node': hireNodeJSDeveloper,
  'hire-php': hirePhpDeveloper,
  'hire-laravel': hireLaravelDeveloper,
  // trending
  'hire-unreal': hireUnrealEngineDeveloper,
  'hire-ui': hireUIUXDesigner,
  'hire-software': hireSoftwareDeveloper,
  'hire-devops': hireDevOpsDeveloper,
  'hire-mern': hireMERNStackDeveloper,
  'hire-mean': hireMEANStackDeveloper,
  'hire-game': hireGameDeveloper,
} as const;

type ServiceKey = keyof typeof dataMap;
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const service = (await params).service;

  const resolveService = (service: string) => {
    const prefixMap: { prefixes: string[]; seoKey: keyof typeof SEO }[] = [
      { prefixes: ['web', 'software'], seoKey: 'web_app_development_services' },
      {
        prefixes: [
          'mobile',
          'saas',
          'app',
          'ios',
          'android',
          'react-native',
          'flutter',
          'swift',
          'iconic',
        ],
        seoKey: 'mobile_app_development_services',
      },
      {
        prefixes: [
          'next',
          'react',
          'angular',
          'vue',
          'backbone',
          'javascript',
          'svelte',
        ],
        seoKey: 'frontend_technology',
      },
      {
        prefixes: ['python', 'golang', 'node', 'laravel', 'php', 'meteor'],
        seoKey: 'backend_technology',
      },
      { prefixes: ['mvp', 'saas'], seoKey: 'about_us' },
    ];

    const matched = prefixMap.find((entry) =>
      entry.prefixes.some((prefix) => service.startsWith(prefix)),
    );

    if (matched) return SEO?.[matched.seoKey];
  };
  const seoData = resolveService(service);
  return seoData
    ? generateSEOMetadata({
        title: seoData ? seoData?.title : '',
        description: seoData.description,
        og_url: `https://optimitylogics.com/${service}`,
        og_image:
          'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
      })
    : {
        title: 'Optimity Logics',
        description: 'Digital Transformation & App Development Company',
      };
}

const SubcategoryPage = async (props: { params: Params }) => {
  const { service } = await props.params;

  const mainService = service.startsWith('react-js')
    ? 'react-js'
    : service.startsWith('react-native')
      ? 'react-native'
      : service.startsWith('software-development')
        ? 'software-development'
        : service.startsWith('hire-react-native')
          ? 'hire-react-native'
          : service.startsWith('hire')
            ? service.split('-').slice(0, 2).join('-')
            : service.split('-')[0];

  const pageData = mainService ? dataMap[mainService as ServiceKey] : null;
  if (!pageData) return <p>Data not found.</p>;
  if (service.startsWith('hire')) {
    return <HireUs />;
  }
  if (
    [
      'healthcare',
      'fintech',
      'real',
      'ecommerce',
      'educational',
      'logistics',
      'educational',
      'logistics',
      'devops',
      'cloud',
      'product',
      'on',
      'startup',
      'enterprise',
    ].includes(mainService)
  ) {
    return <Solution />;
  }
  return <AllPageContent data={pageData} />;
};

export default SubcategoryPage;
