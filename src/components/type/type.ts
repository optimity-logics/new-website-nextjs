import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IFooterDataType {
  heading: string;
  items: { title: string; link: string }[];
}

export interface IMenuSidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  // toggleDrawer: () => void;
}

// custome drawer type
export interface IDrawerCustomeProps {
  open: boolean;
  onClose: () => void;
  direction: 'left' | 'right' | 'top' | 'bottom';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'full' | number | string;
  className?: string;
  children: ReactNode;
}

export interface IAccordionDataType {
  title: ReactNode;
  content: ReactNode;
}

export interface IBlogType {
  blogHeading: string;
  data: {
    img: string;

    title: string;

    description: string;
  }[];
}

// common page pass props data types

type Accuracy = {
  accuraceyImg: string;
  accuraceyTitle: string;
};

type Integration = {
  images: string[];
  heading: string;
  description: string;
};

type TypesOfApplication = {
  heading: string;
  description: string;
};

// type HeroSectionData = {
//   heading: string;
//   description: string;
//   techImg: string | StaticImageData;
//   btnName: string;
//   btnLink: string;
//   workWithTechnology: { title: string; description: string }[];
// };

type Development = {
  heading: string;
  description: string;
  typesOfApplication: TypesOfApplication[];
  btnName: string;
};

type NextGen = {
  heading: string;
  description: string;
  btnName: string;
  img: string;
  accuracey: Accuracy[];
};

type TechnologiesIntegrations = {
  heading: string;
  description: string;
  btnName: string;
  integrations: Integration[];
};

type WhyOptimityForDevelopment = {
  heading: string;
  description: string;
  typesOfApplication: TypesOfApplication[];
  btnName: string;
};

export type IPropsDataTypes = {
  HeroSectionData: {
    heading: string;
    description: string;
    techImg: StaticImageData | string; // Update this line
    btnName: string;
    btnLink: string;
    workWithTechnology: {
      title: string;
      description: string;
    }[];
  };
  Development: Development;
  NextGen: NextGen;
  TechnologiesIntegrations: TechnologiesIntegrations;
  WhyOptimityForDevelopment: WhyOptimityForDevelopment;
};
