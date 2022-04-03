import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import logoDark from 'assets/Logo-dark.png';
import logoLight from 'assets/Logo-light.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Pierre du Toit"
            width={80}
          >
            <Box
              component={'img'}
              src={mode === 'light' ? logoDark : logoLight}
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://www.linkedin.com/in/subaquatic-pierre/"
                color="text.primary"
                target={'blank'}
              >
                <LinkedInIcon fontSize="large" />
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://github.com/subaquatic-pierre"
                color="text.primary"
                target={'blank'}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          All rights reserved.
        </Typography>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Pierre Du Toit - {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
