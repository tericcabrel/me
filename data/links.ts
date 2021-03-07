import { HeaderLinkType, SocialLinkType } from '../types';
import LinkedinIcon from '@/components/icons/linkedin';
import GithubIcon from '@/components/icons/github';
import TwitterIcon from '@/components/icons/twitter';
import EmailIcon from '@/components/icons/email';

export const links: HeaderLinkType[] = [
  { name: 'Experience', path: '#experience' },
  { name: 'Work', path: '#work' },
  { name: 'Stack', path: '#stack' },
  { name: 'Blog', path: '#blog' },
];

export const socialLinks: SocialLinkType[] = [
  { content: GithubIcon, path: 'https://github.com/tericcabrel', width: 32, height: 32 },
  { content: LinkedinIcon, path: 'https://linkedin.com/in/tericcabrel' },
  { content: TwitterIcon, path: 'https://twitter.com/tericcabrel', width: 32, height: 32 },
  { content: EmailIcon, path: 'mailto:tericcabrel@yahoo.com', width: 36, height: 36 },
];
