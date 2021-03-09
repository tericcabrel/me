import Section from '@/components/common/section';
import GithubIcon from '@/components/icons/github';
import CustomLink from '@/components/common/customLink';
import WebIcon from '@/components/icons/web';
import ExternalIcon from '@/components/icons/external';

const Work = () => {
  return (
    <Section id="work" title="Some Things I’ve Built">
      <div className="w-full mx-auto my-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
        <div className="project rounded-xl shadow-lg flex flex-col p-8">
          <div className="mb-8 flex justify-between">
            <div className="text-color-white">
              <WebIcon height={32} width={32} />
            </div>
            <div className="flex">
              <CustomLink path="/">
                <GithubIcon width={24} height={24} />
              </CustomLink>
              <div className="p-2" />
              <CustomLink path="/">
                <ExternalIcon width={24} height={24} />
              </CustomLink>
            </div>
          </div>

          <div className="flex-grow">
            <h2 className="text-xl font-bold text-color-white mb-3">Webdesign</h2>
            <p className="project-description text-color-light-slate">
              Donner du goût 😍 de la couleur aux applications, je le fais afin de rendre vos sites attrayants 🎨. Avant
              de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin.
            </p>
          </div>

          <div className="project-stack stack mt-6 text-sm">Node.js, Java, Spring</div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
