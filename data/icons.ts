import { FC } from 'react';

import AwsIcon from '@/components/icons/aws';
import BashIcon from '@/components/icons/bash';
import DockerIcon from '@/components/icons/docker';
import GitIcon from '@/components/icons/git';
import GraphqlIcon from '@/components/icons/graphql';
import JavaIcon from '@/components/icons/java';
import LinkedinIcon from '@/components/icons/linkedin';
import MicroserviceIcon from '@/components/icons/microservice';
import MongoIcon from '@/components/icons/mongo';
import MysqlIcon from '@/components/icons/mysql';
import NodeIcon from '@/components/icons/node';
import ReactIcon from '@/components/icons/react';
import TypescriptIcon from '@/components/icons/typescript';
import PostIcon from '@/components/icons/post';
import { IconProps } from '../types';

export const iconMap: Record<string, FC<IconProps>> = {
  aws: AwsIcon,
  bash: BashIcon,
  docker: DockerIcon,
  git: GitIcon,
  graphql: GraphqlIcon,
  java: JavaIcon,
  linkedin: LinkedinIcon,
  microservice: MicroserviceIcon,
  mongo: MongoIcon,
  mysql: MysqlIcon,
  'node.js': NodeIcon,
  react: ReactIcon,
  typescript: TypescriptIcon,
  default: PostIcon,
};
