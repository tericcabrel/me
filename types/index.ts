import { FC } from 'react';
import { PostOrPage } from '@tryghost/content-api';

export type HeaderLinkType = {
  name: string;
  path: string;
};

export type IconProps = {
  width?: number;
  height?: number;
};

export type SocialLinkType = {
  content: FC<IconProps>;
  path: string;
  width?: number;
  height?: number;
};

export type BlogPost = Pick<PostOrPage, 'title' | 'url' | 'uuid' | 'feature_image' | 'published_at'> & {
  tags: string[];
};
