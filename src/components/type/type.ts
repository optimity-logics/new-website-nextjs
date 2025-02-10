import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IFooterDataType {
  heading: string;
  items: { title: string; link: string }[];
}

export interface IFaqsData {
  question: string;
  answer: string;
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

type IHeroSectionData = {
  heading: string;
  description: string;
  techImg?: StaticImageData | string;
  btnName: string;
  btnLink: string;
  workWithTechnology: {
    title: string;
    description: string;
  }[];
};

type IDevelopment = {
  heading: string;
  description: string;
  btnLink: string;
  typesOfApplication: TypesOfApplication[];
  btnName: string;
};

type INextGen = {
  heading: string;
  description: string;
  btnName: string;
  btnLink: string;
  img: StaticImageData | string;
  accuracey: Accuracy[];
};

type ITechnologiesIntegrations = {
  heading: string;
  description: string;
  btnName: string;
  btnLink: string;
  integrations: Integration[];
};

type IWhyOptimityForDevelopment = {
  heading: string;
  description: string;
  typesOfApplication: TypesOfApplication[];
  btnName: string;
};

type ITechnologiesFeatured = {
  heading: string;
  description: string;
  expertiseInFeacture: {
    img: StaticImageData | string;
    label: string;
    title: string;
    description: string;
  }[];
};
type ITechnologyWeUseInDevelopment = {
  heading: string;
  description: string;
  btnName: string;
  btnLink: string;
  technologyServices: {
    bgColor: string;
    servicesName: string;
    servicesImg: string;
    servicesItems: string[];
  }[];
};
type IResources = {
  heading: string;
  description: string;
  btnName: string;
  linkName: string;
  resourcesData: {
    img: string;
    title: string;
    description: string;
  }[];
};
type IAchievements = {
  heading: string;
  aboutUs: {
    Img: string | StaticImageData;
    basicInfo: string;
    description: string;
    bgColor: string;
  }[];
  achievementsData: {
    rating: number;
    title: string;
    logoImg: StaticImageData | string;
  }[];
};

type IDeployProject = {
  heading: string;
  description: string;
  deployProjectItem: {
    deployProjectImg: StaticImageData | string;
    deployProjectHeading: string;
    deployProjectDescription: string;
    caseStudyLink: string;
  }[];
};

type IFaqs = {
  heading: string;
  description: string;
  faqs: { question: string; answer: string }[];
};
export type IPropsDataTypes = {
  HeroSectionData: IHeroSectionData;
  AppDevelopment: IDevelopment;
  NextGen: INextGen;
  TechnologiesIntegrations: ITechnologiesIntegrations;
  WhyOptimityForDevelopment: IWhyOptimityForDevelopment;
  TechnologiesFeatured: ITechnologiesFeatured;
  TechnologyWeUseInDevelopment: ITechnologyWeUseInDevelopment;
  Resources: IResources;
  Achievements: IAchievements;
  Faqs: IFaqs;
  deployProject?: IDeployProject;
};
