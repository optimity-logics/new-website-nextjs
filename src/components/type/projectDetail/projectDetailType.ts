interface IHeroSection {
  projectLogo: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  heroProjectMockupImg: string;
  heroBgimg: string;
}
interface IAboutTheProject {
  title: string;
  description: string;
  projectMockupImages: string;
}
interface IProjectSolution {
  title: string;
  description: string;
  projectSolutionCard: {
    solutionTitle: string;
    solutionDescription: string;
  }[];
  projectLogo: string;
  subDescription: string;
  projectUser: string;
}
interface IExploreProjects {
  heading: string;
  description: string;
  buttonName: string;
  buttonLink: string;
  deployProjects: {
    projectImg: string;
    projectName: string;
    projectDescription: string;
  }[];
}
export interface IProjectDetail {
  slug: string;
  heroSection: IHeroSection;
  aboutTheProject: IAboutTheProject;
  projectHomePageImage: string;
  projectSubMockupImages: string[];
  projectSolution: IProjectSolution;
  exploreProjects: IExploreProjects;
}
