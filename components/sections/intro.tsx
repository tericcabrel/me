import React from 'react';
import { socialLinks } from '../../data/links';
import CustomLink from '@/components/common/customLink';

const Intro = () => {
  return (
    <section className="text-left mt-12 mb-36">
      <div>
        <div className="text-color-primary">Hello, my name is</div>
        <div className="intro-name mt-9 text-color-white font-bold text-5xl">Eric Cabrel TIOGO.</div>
        <div className="intro-quote mt-5 text-3xl font-bold">Making impact in the world with coding</div>
        <div className="mt-7">
          <p className="intro-text mb-2">I'm a Software Engineer living in Paris, France.</p>
          <p className="intro-text mb-2">
            I'm interested in Backend, DX, Observability, DevOps and Infrastructure as Code.
          </p>
          <p>I enjoy sharing my knowledge and contributing to open source projects</p>
        </div>
        <div className="intro-social mt-12 flex w-60 justify-between items-center">
          {socialLinks.map((link) => {
            const Icon = link.content;

            return (
              <CustomLink key={link.path} path={link.path}>
                <Icon height={link.height} width={link.width} />
              </CustomLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Intro;
