import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';
import Partners from 'components/Partners';
import PortfolioContact from 'components/PortfolioContact';

const PortfolioGrid = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <PortfolioHero />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners />
      </Container>
      <Container>
        <PortfolioMain />
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
        <Container>
          <PortfolioContact />
        </Container>
      </Box>
    </Main>
  );
};

export default PortfolioGrid;
