import React from 'react';
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';
import Container from '@mui/material/Container';

import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';
import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';

import { githubUsername } from 'const';

const githubToken = process.env.REACT_APP_FOO;

const Projects = (): JSX.Element => {
  const [allProjects, setAllProjects] = useState<ProjectMetaData[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const octokit = new Octokit({ auth: githubToken });

  const getProjects = async () => {
    const response = await octokit.request(
      `GET /repos/${githubUsername}/projects/contents/index.json`,
    );

    const { content } = response.data;

    // Decode base64 string
    const encoded = atob(content);
    const projects = JSON.parse(encoded);
    setAllProjects(projects);
    setProjectsLoaded(true);
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
