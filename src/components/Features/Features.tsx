/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import profilePic from 'assets/profile-pic.jpg';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

const Features = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              A full stack web developer
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'text.secondary'}
              paragraph
            >
              As a leading-edge software developer, I am passionate about
              pushing the boundaries of innovation and creating exceptional
              software solutions. I believe that the power of technology can
              transform the way we work, live, and interact with the world.
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              With a keen eye for detail and a commitment to excellence, I turn
              ideas into reality by leveraging the latest tools, techniques, and
              technologies. Whether it's developing custom software
              applications, optimizing business processes, or improving user
              experiences, I am dedicated to delivering solutions that exceed
              expectations. Trust me to bring your vision to life with my
              expertise in software development.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={400} width={1}>
            <Box
              component="img"
              height="100%"
              width="100%"
              src={profilePic}
              sx={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
