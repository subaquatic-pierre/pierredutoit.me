/* eslint-disable react/no-unescaped-entities */
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'components/Image';

const Features = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box my={10}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              A full stack web developer
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              I'm from South Africa 🇿🇦, currently living in the UAE 🇦🇪. I have a
              passion for creating reliable, secure and efficient web apps. I
              enjoy designing and developing user friendly UI's connected to
              powerful API's.
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
          <Image
            height={400}
            width={400}
            objectFit="cover"
            src="/assets/profile-pic.jpg"
            alt="Profile picture"
            style={{
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
