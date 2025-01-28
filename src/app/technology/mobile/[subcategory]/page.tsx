'use client';
import { useParams } from 'next/navigation';

const SubcategoryPage = () => {
  const { subcategory } = useParams();

  return (
    <div>
      <h1>{subcategory ? subcategory : 'Subcategory'}</h1>
      <p>
        Welcome to the <strong>{subcategory}</strong> page under Mobile
        technologies.
      </p>
      {/* <AllPageContent pageData={flutterData} /> */}
    </div>
  );
};
export default SubcategoryPage;
