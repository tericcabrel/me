import { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    title: 'User authentication with smartcard and fingerprint',
    description:
      'Stores user information in a smart card and authenticates with the fingerprint stored in the smart card.',
    stacks: ['Javacard', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Socket.io'],
    demoLink: 'https://www.youtube.com/watch?v=QcHWxv8MELw',
    githubLink: 'https://github.com/tericcabrel/smartcard-with-fingerprint-auth',
  },
  {
    title: 'MERN Starter Project',
    description: 'A starter project for React, Node.js, Express and MongoDB Application.',
    stacks: ['Node.js', 'React', 'Express', 'MongoDB', 'Typescript'],
    demoLink: 'https://www.youtube.com/watch?v=w4-IBA2bRLo&feature=youtu.be',
    githubLink: 'https://github.com/tericcabrel/react-starter',
  },
  {
    title: 'User authentication and authorization API',
    description:
      'A Backend service API for managing users, roles and permissions. Also token generation and validation.',
    stacks: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'Docker'],
    demoLink: null,
    githubLink: 'https://github.com/tericcabrel/spring-user-management',
  },
  {
    title: 'Twitter Bot for Dev Community',
    description: 'Twitter bot for the hashtag #caparledev used in french community of Central Africa.',
    stacks: ['Node.js', 'MongoDB', 'Docker', 'Typescript'],
    demoLink: 'https://twitter.com/caparledev',
    githubLink: 'https://github.com/osscameroon/caparledev-bot',
  },
];
