export interface HeroSection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgClass: string;
  heroImage: string;
  watermark: string;
}

export interface CtaSection {
  heading: string;
  buttonText: string;
  buttonLink: string;
  bgClass: string;
}

export interface WorkItem {
  title: string;
  description: string;
  backGrouund: string;
}

export interface HealthcareServices {
  title: string;
  description: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceIcon: string;
  services: string[];
  images: string[];
}

export interface ProjectItem {
  projectName: string;
  projectDescription: string;
  projectImg: string;
}

export interface ExploreProjects {
  heading: string;
  description: string;
  buttonName: string;
  buttonLink: string;
  deployProjects: ProjectItem[];
}

export interface IsolutionsPage {
  heroSection: HeroSection;
  ctaSection: CtaSection;
  healthcareServices: HealthcareServices;
  exploreProjects: ExploreProjects;
}
