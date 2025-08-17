export const fetchGithubProjects = async (repoNames: string[]) => {
  const projects = await Promise.all(
    repoNames.map(async (repoName) => {
      const response = await fetch(`https://api.github.com/repos/${repoName}`);
      const data = await response.json();
      return {
        repoName,
        url: data.html_url,
        stars: data.stargazers_count,
        description: data.description,
      };
    }),
  );

  return projects;
};
