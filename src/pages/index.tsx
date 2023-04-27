import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../layout/Layout';

import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import GetStarted from 'components/GetStarted';
import Container from 'components/Container';
import Features from 'components/Features';
import Solutions from 'components/Solutions';
import Benefits from 'components/Benefits';
import IndexHero from 'components/IndexHero';

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme();
  return (
    <Layout>
      <IndexHero />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0
          )}, ${alpha(theme.palette.primary.main, 1)} 100%)`,
          backgroundRepeat: 'repeat-x',
          position: 'relative'
        }}
      >
        <Container>
          <Features />
        </Container>
        <Container>
          <Solutions />
        </Container>
        <Container>
          <Benefits />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1)
          }}
        >
          <path
            fill={theme.palette.primary.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <GetStarted />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ZeroIsOne Dot IO</title>;
