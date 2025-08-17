import { AwsIcon } from './icons/stack/aws';
import { DatadogIcon } from './icons/stack/datadog';
import { DockerIcon } from './icons/stack/docker';
import { GithubActionsIcon } from './icons/stack/github-actions';
import { GraphqlIcon } from './icons/stack/graphql';
import { MicroserviceIcon } from './icons/stack/microservice';
import { MongoIcon } from './icons/stack/mongo';
import { MysqlIcon } from './icons/stack/mysql';
import { NodeIcon } from './icons/stack/node';
import { ReactIcon } from './icons/stack/react';
import { TerraformIcon } from './icons/stack/terraform';
import { TypescriptIcon } from './icons/stack/typescript';

const technologies = [
  { name: 'AWS', icon: AwsIcon, title: 'Amazon Web Services' },
  { name: 'CI/CD', icon: GithubActionsIcon, title: 'GitHub Actions' },
  { name: 'Docker', icon: DockerIcon, title: 'Docker' },
  { name: 'EDA', icon: MicroserviceIcon, title: 'Event Driven Architecture' },
  { name: 'GraphQL', icon: GraphqlIcon, title: 'GraphQL' },
  { name: 'IaC', icon: TerraformIcon, title: 'Infrastructure as Code' },
  { name: 'NoSQL', icon: MongoIcon, title: 'MongoDB' },
  { name: 'Node.js', icon: NodeIcon, title: 'Node.js' },
  { name: 'Observability', icon: DatadogIcon, title: 'Datadog' },
  { name: 'React', icon: ReactIcon, title: 'React' },
  { name: 'SQL', icon: MysqlIcon, title: 'MySQL' },
  { name: 'TypeScript', icon: TypescriptIcon, title: 'TypeScript' },
];

export function TechStack() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <tech.icon title={tech.title} />
              </div>
              <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
