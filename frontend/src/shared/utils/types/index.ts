export type selectedCardIdProp = {
  selectedCardId: number;
};

export type IconProp = {
  className?: string;
  width?: number;
  height?: number;
};

export type projectImagesLinkProps = {
  id: number;
  link: string;
};

export type techStacksProp = {
  id: number;
  icon: string;
  name: string;
};

export type projectDescription = {
  id: number;
  title: string;
  description: string;
};

export type portfolioDataProp = {
  id: number;
  title: string;
  image: string;
  description: string;
  projectDescription: projectDescription[];
  projectImagesLink: projectImagesLinkProps[];
  projectGithubLink: string;
  techStacks: techStacksProp[];
  otherTechStacks: techStacksProp[];
};

export type portfolioCardProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  onCardClick: (id: number) => void;
  techStackIcon: techStacksProp[];
  projectGithubLink: string;
};
