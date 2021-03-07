import React from 'react';

import Section from '@/components/common/section';
import StackItem from '@/components/common/stackItem';
import NodeIcon from '@/components/icons/node';
import JavaIcon from '@/components/icons/java';
import TypescriptIcon from '@/components/icons/typescript';
import AwsIcon from '@/components/icons/aws';
import DockerIcon from '@/components/icons/docker';
import GitIcon from '@/components/icons/git';
import MongoIcon from '@/components/icons/mongo';
import ReactIcon from '@/components/icons/react';
import MysqlIcon from '@/components/icons/mysql';
import BashIcon from '@/components/icons/bash';
import GraphqlIcon from '@/components/icons/graphql';
import MicroserviceIcon from '@/components/icons/microservice';

const Stack = () => {
  return (
    <Section id="stack" title="Tech Stack">
      <div className="mx-auto mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
        <StackItem title="Node.js">
          <NodeIcon />
        </StackItem>
        <StackItem title="Java">
          <JavaIcon />
        </StackItem>
        <StackItem title="Typescript">
          <TypescriptIcon />
        </StackItem>
        <StackItem title="GraphQL">
          <GraphqlIcon />
        </StackItem>
        <StackItem title="Microservice">
          <MicroserviceIcon />
        </StackItem>
        <StackItem title="AWS">
          <AwsIcon />
        </StackItem>
        <StackItem title="Docker">
          <DockerIcon />
        </StackItem>
        <StackItem title="Git">
          <GitIcon />
        </StackItem>
        <StackItem title="MySQL">
          <MysqlIcon />
        </StackItem>
        <StackItem title="MongoDB">
          <MongoIcon />
        </StackItem>
        <StackItem title="Bash">
          <BashIcon />
        </StackItem>
        <StackItem title="React">
          <ReactIcon />
        </StackItem>
      </div>
    </Section>
  );
};

export default Stack;
