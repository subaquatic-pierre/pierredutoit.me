import React from 'react';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material/styles';
import { Octokit } from '@octokit/core';

import Main from 'layouts/Main';

import Container from 'components/Container';
import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';
import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';

const PortfolioGrid = (): JSX.Element => {
  const theme = useTheme();
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [projectsLoaded, setProjectsLoaded] = React.useState(false);
  const octokit = new Octokit();

  const getProjects = async () => {
    const response = await octokit.request(
      'GET /repos/subaquatic-pierre/projects/contents/index.json',
    );

    const { content } = response.data;

    // Decode base64 string
    const encoded = atob(content);
    setProjects(JSON.parse(encoded));
    // setProjectsLoaded(true);
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
          <PortfolioMain projects={projects} />
        ) : (
          <PortfolioPlaceholder />
        )}
      </Container>
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default PortfolioGrid;
