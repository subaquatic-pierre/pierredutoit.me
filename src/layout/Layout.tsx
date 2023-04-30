import React, { useEffect, useState, createContext } from 'react';

import { Octokit } from 'octokit';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from '../theme';
import AOS from 'aos';

import Page from './Page';

import { ThemeMode, ToggleThemeContactReturn } from '../hooks/useDarkMode';

export const ThemeToggleContext = createContext<ToggleThemeContactReturn>({
  themeMode: 'dark',
  themeToggler: () => {}
});

const githubUsername = process.env.GITHUB_USERNAME;
const githubToken = process.env.GIT_AUTH_TOKEN;

const octokit = new Octokit({ auth: githubToken });

export const OctokitContext = createContext<{
  octokit: Octokit;
  githubUsername: string;
}>({ octokit, githubUsername });

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  let localTheme: ThemeMode = 'dark';

  try {
    if (window) {
      localTheme = window.localStorage.getItem('themeMode') as ThemeMode;
    }
  } catch {}
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
        <OctokitContext.Provider value={{ octokit, githubUsername }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Page>{children}</Page>
        </OctokitContext.Provider>
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
