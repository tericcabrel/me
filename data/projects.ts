import { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    title: 'Authentication with smartcard and fingerprint',
    description:
      'Stores user information in a smart card and authenticates with the fingerprint stored in the smart card ',
    stacks: ['Javacard', 'Springboot', 'RabbitMQ', 'MySQL', 'Socket.io'],
    demoLink: 'https://www.youtube.com/watch?v=QcHWxv8MELw',
    githubLink: 'https://github.com/tericcabrel/smartcard-with-fingerprint-auth',
  },
  {
    title: 'MERN Starter',
    description: 'A starter project for React, Node.js, Express and MongoDB Application',
    stacks: ['Node.js', 'React', 'Express', 'MongoDB'],
    demoLink: 'https://www.youtube.com/watch?v=w4-IBA2bRLo&feature=youtu.be',
    githubLink: 'https://github.com/tericcabrel/react-starter',
  },
  {
    title: 'Authentication and Authorization API',
    description: 'A REST API for User and Role management, token generation and validation',
    stacks: ['Java', 'Springboot', 'MongoDB', 'Redis', 'Docker'],
    demoLink: null,
    githubLink: 'https://github.com/tericcabrel/spring-user-management',
  },
  {
    title: 'Twitter Bot',
    description: 'Twitter bot for the hashtag #caparledev ',
    stacks: ['Node.js', 'MongoDB', 'Docker'],
    demoLink: 'https://twitter.com/caparledev',
    githubLink: 'https://github.com/osscameroon/caparledev-bot',
  },
];
