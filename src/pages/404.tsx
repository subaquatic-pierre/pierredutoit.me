import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link, HeadFC, PageProps } from 'gatsby';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Layout from 'layout';
import Container from 'components/Container';

const NotFoundPage: React.FC<PageProps> = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  return (
    <Layout>
      <Box
        // bgcolor={theme.palette.primary.main}
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        marginTop={-12}
        paddingTop={12}
      >
        <Container>
          <Grid container>
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Box>
                <Typography
                  variant="h1"
                  component={'h1'}
                  align={isMd ? 'left' : 'center'}
                  sx={{ fontWeight: 700 }}
                >
                  404
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.secondary"
                  align={isMd ? 'left' : 'center'}
                >
                  Oops! Looks like you followed a bad link.
                  <br />
                  If you think this is a problem with us, please{' '}
                  <Link to={'/contact'}>tell us</Link>
                </Typography>
                <Box
                  marginTop={4}
                  display={'flex'}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    size="large"
                    to={'/'}
                  >
                    Back home
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12} md={6}>
              <Box height={1} width={1} maxWidth={500}>
                <Box
                  component={'img'}
                  src={
                    'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg'
                  }
                  width={1}
                  height={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
