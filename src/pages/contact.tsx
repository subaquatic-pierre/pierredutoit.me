import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import useMediaQuery from '@mui/material/useMediaQuery';

import Layout from '../layout/Layout';
import ContactForm from 'components/ContactForm';
import GetStarted from 'components/GetStarted';
import Container from 'components/Container';
import Features from 'components/Features';
import Solutions from 'components/Solutions';
import Benefits from 'components/Benefits';
import IndexHero from 'components/IndexHero';

import contactImage from 'assets/contact-image.jpg';

const ContactPage: React.FC<PageProps> = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const Sidebar = () => (
    <Box
      flex={'1 1 30%'}
      maxWidth={'30%'}
      maxHeight={'100vh'}
      position={'sticky'}
      top={0}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        height={1}
        width={1}
        sx={{
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1
          }
        }}
      >
        <Box
          component="img"
          height={1}
          width={1}
          src={contactImage}
          alt="..."
          sx={{
            objectFit: 'cover',
            alignRight: 0,
            '& .lazy-load-image-loaded': {
              height: 1
            }
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Layout>
      <Box
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        marginTop={-13}
      >
        {isMd ? <Sidebar /> : null}
        <Box
          flex={{ xs: '1 1 100%', md: '1 1 70%' }}
          maxWidth={{ xs: '100%', md: '70%' }}
          paddingTop={14}
        >
          <Box height={1}>
            <Container>
              <ContactForm />
            </Container>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact | ZeroIsOne Dot IO</title>;
