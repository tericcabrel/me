import { ArrowDown, Mail } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { GithubIcon } from './icons/github';
import { LinkedinIcon } from './icons/linkedin';
import { TwitterIcon } from './icons/twitter';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Image
              src="/rico.jpg"
              alt="Eric Cabrel TIOGO"
              className="w-28 h-28 rounded-full object-cover"
              width={112}
              height={112}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Hi, I'm <span className="text-primary">Eric Tiogo</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">Making impact in the world with coding</p>
          <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a software engineer living in France. I love building web applications with a focus on the Backend and
            DX. I enjoy sharing knowledge through tutorials.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:contact@tericcabrel.com">Get In Touch</a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com/in/tericcabrel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon height={24} width={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/tericcabrel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon height={24} width={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/tericcabrel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <TwitterIcon height={24} width={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="mailto:contact@tericcabrel.com"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
