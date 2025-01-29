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

type HeroSectionData = {
  heading: string;
  description: string;
  techImg: StaticImageData | string;
  btnName: string;
  btnLink: string;
  workWithTechnology: {
    title: string;
    description: string;
  }[];
};

type Development = {
  heading: string;
  description: string;
  btnLink: string;
  typesOfApplication: TypesOfApplication[];
  btnName: string;
};

type NextGen = {
  heading: string;
  description: string;
  btnName: string;
  btnLink: string;
  img: StaticImageData | string;
  accuracey: Accuracy[];
};

type TechnologiesIntegrations = {
  heading: string;
  description: string;
  btnName: string;
  btnLink: string;
  integrations: Integration[];
};

type WhyOptimityForDevelopment = {
  heading: string;
  description: string;
  typesOfApplication: TypesOfApplication[];
  btnName: string;
};

export type IPropsDataTypes = {
  HeroSectionData: HeroSectionData;
  AppDevelopment: Development;
  NextGen: NextGen;
  TechnologiesIntegrations: TechnologiesIntegrations;
  WhyOptimityForDevelopment: WhyOptimityForDevelopment;
};
