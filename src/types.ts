export type IconProps = {
  width?: number;
  height?: number;
  title?: string;
};

export type BlogPost = {
  featureImage: string;
  title: string;
  url: string;
  uuid: string;
  publishedAt: string;
  plaintext: string;
  tags: string[];
};

export type GithubProject = {
  repoName: string;
  description: string;
  url: string;
  stars: number;
};
