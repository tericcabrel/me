import { Heart, Mail } from 'lucide-react';

import { GithubIcon } from './icons/github';
import { LinkedinDarkIcon } from './icons/linkedin';
import { TwitterDarkIcon } from './icons/twitter';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Eric Cabrel TIOGO</h3>
            <p className="text-background/80 leading-relaxed">
              Software engineer passionate about building great web applications and sharing knowledge with the people.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#articles" className="text-background/80 hover:text-background transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tericcabrel.com"
                  className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tericcabrel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors">
                <GithubIcon height={20} width={20} color="dark" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/tericcabrel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors">
                <LinkedinDarkIcon height={20} width={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/tericcabrel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors">
                <TwitterDarkIcon height={20} width={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:contact@tericcabrel.com"
                className="text-background/80 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-400" /> by Eric Cabrel TIOGO
          </p>
          <p className="text-background/60 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
