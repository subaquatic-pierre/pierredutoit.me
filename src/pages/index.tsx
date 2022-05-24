import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import GetStarted from 'components/GetStarted';
import Features from 'components/Features';
import Solutions from 'components/Solutions';
import Benefits from 'components/Benefits';
import IndexHero from 'components/IndexHero';

const IndexView = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <IndexHero />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0,
          )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
          backgroundRepeat: 'repeat-x',
          position: 'relative',
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
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <GetStarted />
      </Container>
    </>
  );
};

export default IndexView;
