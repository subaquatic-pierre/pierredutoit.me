import React, { useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { NotificationProvider } from 'react-mui-notify';

import AOS from 'aos';

import 'aos/dist/aos.css';

import getTheme from 'theme';
import { useDarkMode } from 'hooks';
import Layout from 'layout';

interface Props {
  /* eslint-disable @typescript-eslint/no-explicit-any  */
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  // const router = useRouter();
  // const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
  // if (path) {
  //   router.replace(path);
  // }

  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      <CssBaseline />
      <NotificationProvider config={{ duration: 10000 }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationProvider>
    </ThemeProvider>
  );
}
