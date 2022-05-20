import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'components/Image';

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
            width={140}
            sx={{
              '& > span': {
                filter: mode === 'dark' && 'invert(100%)',
              },
            }}
          >
            <Image alt="Logo" src="/assets/Logo.svg" height={150} width={150} />
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
      <Grid item xs={12} mb={2}>
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
