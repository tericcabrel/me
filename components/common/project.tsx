import WebIcon from '@/components/icons/web';
import CustomLink from '@/components/common/customLink';
import GithubIcon from '@/components/icons/github';
import ExternalIcon from '@/components/icons/external';
import { ProjectData } from '../../types';

type ProjectProps = {
  project: ProjectData;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project rounded-xl shadow-lg flex flex-col p-8">
      <div className="mb-8 flex justify-between">
        <div className="text-color-white">
          <WebIcon height={32} width={32} />
        </div>
        <div className="flex icon-header">
          <CustomLink path={project.githubLink}>
            <GithubIcon height={24} width={24} />
          </CustomLink>
          {project.demoLink && (
            <>
              <div className="p-2" />
              <CustomLink path={project.demoLink}>
                <ExternalIcon height={24} width={24} />
              </CustomLink>
            </>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-bold text-color-white mb-3">{project.title}</h2>
        <p className="project-description text-color-light-slate">{project.description}</p>
      </div>

      <div className="project-stack mt-6 text-sm flex">
        <ul>
          {project.stacks.map((stack) => (
            <li className="mr-4 inline-block" key={stack}>
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
