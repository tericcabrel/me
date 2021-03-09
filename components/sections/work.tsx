import Section from '@/components/common/section';
import Project from '@/components/common/project';

import { projects } from '../../data/projects';

const Work = () => {
  return (
    <Section id="work" title="Some Things I’ve Built">
      <div className="w-full mx-auto mt-10 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Work;
