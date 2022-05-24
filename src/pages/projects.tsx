import React from 'react';
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';
import Container from '@mui/material/Container';

import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';
import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';

import { githubUsername } from 'const';

const Projects = (): JSX.Element => {
  const [allProjects, setAllProjects] = useState<ProjectMetaData[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const githubToken = process.env.GATSBY_GITHUB_TOKEN;

  const octokit = new Octokit({ auth: githubToken });

  const getProjects = async () => {
    try {
      const response = await octokit.request(
        `GET /repos/${githubUsername}/projects/contents/index.json`,
      );

      const { content } = response.data;

      // Decode base64 string
      const encoded = atob(content);
      const projects = JSON.parse(encoded);
      setAllProjects(projects);
      setProjectsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Container>
        <PortfolioHero />
        <Partners />
        {projectsLoaded ? (
          <PortfolioMain projectMetaData={allProjects} />
        ) : (
          <PortfolioPlaceholder />
        )}
      </Container>
    </>
  );
};

export default Projects;
