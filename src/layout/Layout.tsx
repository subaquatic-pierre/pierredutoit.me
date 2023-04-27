import React, { useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from '../theme';
import AOS from 'aos';

import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Topbar from 'components/Topbar';

import pages from './navigation';

import Page from './Page';

import useDarkMode from '../hooks/useDarkMode';
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out'
    });
  }, []);

  const { themeMode, mountedComponent } = useDarkMode();

  useEffect(() => {
    AOS.refresh();

    console.log({ themeMode });
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Page>{children}</Page>
    </ThemeProvider>
  );
};

export default Layout;
