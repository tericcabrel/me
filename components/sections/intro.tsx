import React from 'react';
import { socialLinks } from '../../data/links';
import CustomLink from '@/components/common/customLink';

const Intro = () => {
  return (
    <section className="section-intro text-left">
      <div className="section-intro-content">
        <div className="text-color-primary">Hello, my name is</div>
        <div className="text-lg mt-9 text-color-white font-bold text-7xl">Eric Cabrel TIOGO.</div>
        <div className="mt-5 text-5xl font-bold">I make life easier with coding</div>
        <div className="mt-7">
          <p className="mb-1">I'm a Backend Software Engineer living in Paris, France.</p>
          <p className="mb-1">I work on automating the supply chain of merchandises across the world.</p>
          <p>I enjoy sharing my knowledge, help people and contribute to open source projects</p>
        </div>
        <div className="mt-12 flex w-60 justify-between items-center">
          {socialLinks.map((link) => {
            const Icon = link.content;

            return (
              <CustomLink key={link.path} path={link.path}>
                <Icon width={link.width} height={link.height} />
              </CustomLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Intro;
