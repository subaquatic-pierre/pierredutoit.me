import React from 'react';
import Image from 'components/Image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactForm from 'components/ContactForm';

const ContactPageCover = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
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
          overflow: 'hidden',
        }}
      >
        <Image
          height={2000}
          width={500}
          objectFit="cover"
          src="/assets/contact-image.jpg"
          alt="contact"
        />
      </Box>
    </Box>
  );
  return (
    <>
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
    </>
  );
};

export default ContactPageCover;
