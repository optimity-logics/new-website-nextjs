'use client';
import AllPageContent from '@/components/common/AllPageContent';
import { flutterData } from '@/components/utils/technology/mobile/flutter';
import { IosData } from '@/components/utils/technology/mobile/Ios';

import { useParams } from 'next/navigation';

const dataMap = {
  flutter: flutterData,
  ios: IosData,
} as const;

type ServiceKey = keyof typeof dataMap;

const SubcategoryPage = () => {
  const { service } = useParams<{ service: string }>();
  const mainService = service?.split('-')[0];
  const pageData = dataMap[mainService as ServiceKey] ?? null;
  return pageData ? <AllPageContent data={pageData} /> : <p>Data not found.</p>;
};

export default SubcategoryPage;
