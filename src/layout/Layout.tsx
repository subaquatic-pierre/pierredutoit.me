import React, { useEffect, useState, createContext } from 'react';

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

import { ThemeMode, ToggleThemeContactReturn } from '../hooks/useDarkMode';

export const ThemeToggleContext = createContext<ToggleThemeContactReturn>({
  themeMode: 'dark',
  themeToggler: () => {}
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  let localTheme: ThemeMode = 'dark';

  if (window) {
    localTheme = window.localStorage.getItem('themeMode') as ThemeMode;
  }
  const [themeMode, setTheme] = useState<ThemeMode>(localTheme);

  const themeToggler = () => {
    setTheme((old) => (old === 'dark' ? 'light' : 'dark'));
  };

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

    const localTheme = window.localStorage.getItem('themeMode');
    if (localTheme) setTheme(localTheme as ThemeMode);
  }, []);

  useEffect(() => {
    AOS.refresh();

    window.localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <ThemeToggleContext.Provider value={{ themeMode, themeToggler }}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Page>{children}</Page>
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
