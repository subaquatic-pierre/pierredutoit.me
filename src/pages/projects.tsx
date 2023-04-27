import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Octokit } from '@octokit/core';

import Layout from 'layout';

import Container from 'components/Container';
import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';

import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';

const githubUsername = process.env.GITHUB_USERNAME;
const githubToken = process.env.GIT_AUTH_TOKEN;

const ProjectPage: React.FC<PageProps> = () => {
  const [allProjects, setAllProjects] = React.useState<ProjectMetaData[]>([]);
  const [projectsLoaded, setProjectsLoaded] = React.useState(false);

  const octokit = new Octokit({ auth: githubToken });

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

  React.useEffect(() => {
    getProjects();
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
