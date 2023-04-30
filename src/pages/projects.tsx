import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import Layout from 'layout';

import Container from 'components/Container';
import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';

import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';
import useOctokit from 'hooks/useOctokit';

const ProjectPage: React.FC<PageProps> = () => {
  const { octokit, githubUsername } = useOctokit();
  const [allProjects, setAllProjects] = React.useState<ProjectMetaData[]>([]);
  const [projectsLoaded, setProjectsLoaded] = React.useState(false);

  const getProjects = async () => {
    const response = await octokit.request(
      `GET /repos/${githubUsername}/projects/contents/index.json`
    );

    const { content } = response.data;

    // Decode base64 string
    const encoded = atob(content);
    const projects = JSON.parse(encoded);

    setAllProjects(projects);
    setProjectsLoaded(true);
  };

  const checkAuth = async () => {
    const {
      data: { login }
    } = await octokit.rest.users.getAuthenticated();
    console.log('Hello, %s', login);

    const rate = await octokit.request(`GET /rate_limit`);

    console.log(rate.data);
  };

  React.useEffect(() => {
    getProjects();

    // checkAuth();
  }, []);

  return (
    <Layout>
      <Container>
        <PortfolioHero />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners />
      </Container>
      <Container>
        {projectsLoaded ? (
          <PortfolioMain projectMetaData={allProjects} />
        ) : (
          <PortfolioPlaceholder />
        )}
      </Container>
    </Layout>
  );
};

export default ProjectPage;

export const Head: HeadFC = () => <title>Projects | ZeroIsOne Dot IO</title>;
