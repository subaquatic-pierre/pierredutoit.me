import React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import pages from './navigation';

import Topbar from 'components/Topbar';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Head from 'components/Head';

interface Props {
  children: React.ReactNode;
  bgcolor?: string;
}

const Layout = ({ children, bgcolor = 'transparent' }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box bgcolor={'background.paper'} sx={{ overflowX: 'hidden' }}>
      <Head />
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
