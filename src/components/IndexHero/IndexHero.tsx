import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import ballotonline from 'assets/ballotonline.png';
import divesandybeachFlask from 'assets/divesandybeach-flask.png';
import divesandybeach from 'assets/divesandybeach.png';
import diveschedule from 'assets/diveschedule.png';
import pizza from 'assets/pizza.png';
import portfolio from 'assets/portfolio.png';
import recipes from 'assets/recipes.png';
import roombaBots from 'assets/roombaBots.png';
import scubadivedubai from 'assets/scubadivedubai.png';
import scubadivedubaiEcommerce from 'assets/scubadivedubaiEcommerce.png';
import suretta from 'assets/suretta.png';
import todoapp from 'assets/todoapp.png';

const images = [
  {
    group: [
      {
        cover: ballotonline,
      },
      {
        cover: divesandybeachFlask,
      },
      {
        cover: diveschedule,
      },
    ],
  },
  {
    group: [
      {
        cover: divesandybeach,
      },
      {
        cover: pizza,
      },
      {
        cover: portfolio,
      },
      {
        cover: recipes,
      },
      {
        cover: roombaBots,
      },
    ],
  },
  {
    group: [
      {
        cover: scubadivedubai,
      },
      {
        cover: scubadivedubaiEcommerce,
      },
      {
        cover: todoapp,
      },
      {
        cover: suretta,
      },
      {
        cover: scubadivedubaiEcommerce,
      },
      {
        cover: scubadivedubai,
      },
      {
        cover: pizza,
      },
    ],
  },
];

const IndexHero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
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
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Hey there! 👋
              <br />
              I&apos;m Pierre, a
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                <Typed
                  strings={[
                    'software engineer.',
                    'cloud architect.',
                    'blockchain developer.',
                  ]}
                  typeSpeed={80}
                  loop={true}
                />
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              I am a self-taught software engineer with a passion for anything
              web. The internet is the future and its technologies are exciting
              to explore and develop, check out my latest projects or get in
              touch with me.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/projects'}
              >
                Projects
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/contact'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Get in Touch
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={g.cover}
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
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
  );
};

export default IndexHero;
