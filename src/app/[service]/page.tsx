'use client';
import AllPageContent from '@/components/common/AllPageContent';
import { GolangData } from '@/components/utils/technology/back-end/golang';
import { LaravelData } from '@/components/utils/technology/back-end/laravel';
import { MeteorData } from '@/components/utils/technology/back-end/meteor';
import { NodeData } from '@/components/utils/technology/back-end/node';
import { PhpData } from '@/components/utils/technology/back-end/php';
import { PythonData } from '@/components/utils/technology/back-end/python';
import { AngularData } from '@/components/utils/technology/front-end/angularJs';
import { BackboneJsData } from '@/components/utils/technology/front-end/backboneJs';
import { JavaScriptData } from '@/components/utils/technology/front-end/javascript';
import { NextJaData } from '@/components/utils/technology/front-end/nextJs';
import { VueData } from '@/components/utils/technology/front-end/vueJs';
import { AndroidData } from '@/components/utils/technology/mobile/android';
import { FlutterData } from '@/components/utils/technology/mobile/flutter';
import { Iconic } from '@/components/utils/technology/mobile/iconic';
import { IosData } from '@/components/utils/technology/mobile/Ios';
import { ReactNative } from '@/components/utils/technology/mobile/reactNative';
import { SwiftData } from '@/components/utils/technology/mobile/swift';
import { ReactJsData } from '@/components/utils/technology/front-end/reactJs';

import { useParams } from 'next/navigation';

const dataMap = {
  // mobile
  flutter: FlutterData,
  ios: IosData,
  swift: SwiftData,
  'react-native': ReactNative,
  iconic: Iconic,
  android: AndroidData,
  // front-end
  next: NextJaData,
  'react-js': ReactJsData,
  angular: AngularData,
  vue: VueData,
  backbone: BackboneJsData,
  javascript: JavaScriptData,
  // back-end
  node: NodeData,
  python: PythonData,
  go: GolangData,
  php: PhpData,
  laravel: LaravelData,
  meteor: MeteorData,
} as const;

type ServiceKey = keyof typeof dataMap;

const SubcategoryPage = () => {
  const { service } = useParams<{ service: string }>();
  let mainService: string | null = null;
  if (service === 'react-js-development-service') {
    mainService = 'react-js';
  } else if (service === 'react-native-development-service') {
    mainService = 'react-native';
  } else {
    mainService = service?.split('-')[0] ?? null;
  }
  const pageData = mainService ? dataMap[mainService as ServiceKey] : null;

  return pageData ? <AllPageContent data={pageData} /> : <p>Data not found.</p>;
};

export default SubcategoryPage;
