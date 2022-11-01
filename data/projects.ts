import { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    demoLink: 'https://blog.tericcabrel.com',
    description: 'Personal blog where I write building backend Web applications',
    githubLink: 'https://github.com/tericcabre/blog-tutorials',
    stacks: ['Node.js', 'Java', 'Spring Boot', 'AWS', 'Docker', 'NoSQL', 'TypeScript', 'CI/CD'],
    title: 'Teco Tutorials',
  },
  {
    demoLink: 'https://www.sharingan.dev',
    description: 'Create, manage and share your code snippets with the world',
    githubLink: 'https://github.com/tericcabrel/sharingan',
    stacks: ['Node.js', 'Next.js', 'Serverless', 'AWS', 'Typescript', 'GraphQL', 'Docker'],
    title: 'Sharingan',
  },
  {
    demoLink: 'https://prolanghistory.com',
    description: 'Get information about programming languages through REST API or GraphQL',
    githubLink: 'https://github.com/osscameroon/prolang-api',
    stacks: ['Node.js', 'GraphQL', 'MongoDB', 'TypeScript', 'Docker'],
    title: 'Prolang',
  },
  {
    demoLink: 'https://www.youtube.com/watch?v=QcHWxv8MELw',
    description: 'Authenticate a user with his fingerprint stored in a smart card',
    githubLink: 'https://github.com/tericcabrel/smartcard-with-fingerprint-auth',
    stacks: ['Javacard', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Socket.io'],
    title: 'Osiris',
  },
];
