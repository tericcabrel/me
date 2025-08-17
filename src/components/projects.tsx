import { ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { GithubProject } from '@/types';

import { GithubIcon } from './icons/github';

const projects = [
  {
    title: 'Teco Tutorials',
    description: '',
    image: '/teco-tutorials.png',
    tags: ['Node.js', 'Database', 'AWS', 'Docker', 'IaC', 'GraphQL', 'CI/CD', 'EDA', 'Observability'],
    github: 'tericcabrel/blog-tutorials',
    demo: 'https://blog.tericcabrel.com',
    stars: 0,
  },
  {
    title: 'Snipcode',
    description: '',
    image: '/snipcode.png',
    tags: ['Node.js', 'React', 'MySQL', 'AWS', 'GraphQL', 'Docker', 'Terraform'],
    github: 'tericcabrel/snipcode',
    demo: 'https://snipcode.dev',
    stars: 0,
  },
  {
    title: 'Prolang API',
    description: '',
    image: '/prolangapi.png',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'TypeScript', 'Docker', 'React'],
    github: 'osscameroon/prolang-api',
    demo: 'https://prolanghistory.com',
    stars: 0,
  },
  {
    title: 'Spring User Management',
    description: '',
    image: '/placeholder.png',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Spring Security', 'Spring Data JPA'],
    github: 'tericcabrel/spring-user-management',
    stars: 0,
  },
];

export const projectNames = projects.map((project) => project.github);

export function Projects({ githubProjects }: { githubProjects: GithubProject[] }) {
  const enhancedProjects = githubProjects
    .map((project) => {
      const projectData = projects.find((p) => p.github === project.repoName);

      if (!projectData) {
        return null;
      }

      return {
        ...projectData,
        stars: project.stars,
        url: project.url,
        description: project.description,
      };
    })
    .filter((project) => project !== null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one taught me something new and helped me grow as a
            developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 justify-items-center">
          {enhancedProjects.map((project) => (
            <Card
              key={project.github}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 w-full max-w-[400px]">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={398}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.stars && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                  )}
                </div>
                <CardDescription className="text-foreground leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <GithubIcon height={16} width={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo ?? project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mx-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
