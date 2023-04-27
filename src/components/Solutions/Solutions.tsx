import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

import blockChain from 'assets/solutions/Augmented.svg';
import api from 'assets/solutions/Visual.svg';
import ui from 'assets/solutions/Messaging.svg';
import cloud from 'assets/solutions/Data.svg';

const mock = [
  {
    title: 'Modern UI / UX',
    description:
      'Modern front-end web application designs with React and Material-UI. Focusing on user experience, fast load times, extendable interfaces, SEO friendly responsive mobile designs',
    illustration: ui,
    color: colors.blue[200],
  },
  {
    title: 'Powerful API Development',
    description:
      'Powerful back-end REST API designed with NodeJs and Express. Versatile and reliable GraphQL API designed with Python, Flask and Django',
    illustration: api,
    color: colors.purple[200],
  },
  {
    title: 'Secure Cloud Infrastructure',
    description:
      'Using the latest in AWS Cloud technology, leveraging infrastructure as code with Terraform to deploy reliable, secure and scalable infrastructure for any web application.',
    illustration: cloud,
    color: colors.indigo[200],
  },
  {
    title: 'Blockchain Development',
    description:
      'Blockchain and Web3 is the next step in web evolution. Using Solidity to develop smart contracts which interact it EVM compatible blockchains, leveraging the Ethers project to connect retrieve on-chain data.',
    illustration: blockChain,
    color: colors.green[200],
  },
];

const Solutions = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Solutions
        </Typography>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Your web app development solution is here
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          Using only the best development strategies and code practices.
          <br />
          Leveraging the latest cloud technology with efficiency and security in
          mind.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(item.color, 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={{
                    xs: 2,
                    md: 4,
                  }}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      maxWidth: {
                        xs: '80%',
                        md: '70%',
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    // effect="blur"
                    src={item.illustration}
                    width={1}
                  />
                </Box>
                <Box
                  sx={{
                    minHeight: '200px',
                  }}
                >
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
