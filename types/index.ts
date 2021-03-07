import { FC } from 'react';

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
