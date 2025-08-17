import { About } from '@/components/about';
import { Articles } from '@/components/articles';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects, projectNames } from '@/components/projects';
import { TechStack } from '@/components/tech-stack';
import { fetchBlogPosts } from '@/utils/blog-posts';
import { fetchGithubProjects } from '@/utils/github-projects';

export default async function Home() {
  const posts = await fetchBlogPosts();
  const projects = await fetchGithubProjects(projectNames);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects githubProjects={projects} />
      <TechStack />
      <Articles posts={posts} />
      <Footer />
    </main>
  );
}
