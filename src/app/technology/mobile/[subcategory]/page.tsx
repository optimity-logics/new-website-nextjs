'use client';
import AllPageContent from '@/components/common/AllPageContent';
import { flutterData } from '@/components/utils/technology/mobile/flutter';
import { IosData } from '@/components/utils/technology/mobile/Ios';
import { useParams } from 'next/navigation';

const dataMap = {
  flutter: flutterData,
  ios: IosData,
} as const;

type SubcategoryKey = keyof typeof dataMap;

const SubcategoryPage = () => {
  const { subcategory } = useParams<{ subcategory: string }>();

  const pageData =
    (subcategory in dataMap ? dataMap[subcategory as SubcategoryKey] : null) ??
    null;

  return pageData ? <AllPageContent data={pageData} /> : <p>Data not found.</p>;
};

export default SubcategoryPage;
