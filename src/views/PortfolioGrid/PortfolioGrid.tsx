import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Octokit } from '@octokit/core';

import Main from 'layouts/Main';

import Container from 'components/Container';
import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';
import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';

import { githubUsername } from 'const';
const githubToken = process.env.REACT_APP_FOO;

const PortfolioGrid = (): JSX.Element => {
  const [projectsMetaData, setProjectsMetaData] = React.useState<
    ProjectMetaData[]
  >([]);
  const [projectsLoaded, setProjectsLoaded] = React.useState(false);
  const octokit = new Octokit({ auth: githubToken });

  const getProjects = async () => {
    const response = await octokit.request(
      `GET /repos/${githubUsername}/projects/contents/index.json`,
    );

    const { content } = response.data;

    // Decode base64 string
    const encoded = atob(content);
    setProjectsMetaData(JSON.parse(encoded));
    setProjectsLoaded(true);
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <Main>
      <Container>
        <PortfolioHero />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners />
      </Container>
      <Container>
        {projectsLoaded ? (
          <PortfolioMain projectMetaData={projectsMetaData} />
        ) : (
          <PortfolioPlaceholder />
        )}
      </Container>
    </Main>
  );
};

export default PortfolioGrid;
