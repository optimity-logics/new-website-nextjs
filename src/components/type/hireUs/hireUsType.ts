export interface HeroImages {
  leftImage: string;
  mainImage: string;
}

export interface HeroSection {
  heading: string;
  description: string;
  btnName: string;
  link: string;
  images: HeroImages;
}

export interface HireRequirementCard {
  label: string;
  timing: string;
  image: string;
}

export interface HireRequirementSection {
  heading: string;
  cards: HireRequirementCard[];
}

export interface EngagementModel {
  subHeading: string;
  heading: string;
  button: string;
  image: string;
  link: string;
}

export interface HowWeWorkStep {
  title: string;
  description: string;
}

export interface HowWeWork {
  heading: string;
  description: string;
  steps: HowWeWorkStep[];
}

export interface AdvantageCard {
  title: string;
  description: string;
}

export interface Advantages {
  heading: string;
  cards: AdvantageCard[];
}

export interface IHireUsPageType {
  heroSection: HeroSection;
  hireRequirementSection: HireRequirementSection;
  engagementModel: EngagementModel;
  howWeWork: HowWeWork;
  advantages: Advantages;
  marqueeOne: string[];
  marqueeTwo: string[];
}
