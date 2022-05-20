import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from '../../src/theme';

interface Props {
  children: React.ReactNode;
}

const themeToggler = () => {};

const defaultState = getTheme('light', themeToggler);

export function TopLayout({ children }: Props): JSX.Element {
  const [themeState, setThemeState] = React.useState(defaultState);
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={themeState}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
