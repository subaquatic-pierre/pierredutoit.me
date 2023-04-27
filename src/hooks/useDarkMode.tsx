import React, { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

interface DarkModeReturn {
  mountedComponent: boolean;
  themeToggler: () => void;
  themeMode: ThemeMode;
}

const useDarkMode = (): DarkModeReturn => {
  const [update, setUpdate] = useState(false);
  const [themeMode, setTheme] = useState<ThemeMode>('dark');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: string) => {
    try {
      window.localStorage.setItem('themeMode', mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode as ThemeMode);
  };

  const themeToggler = (): void => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
    setUpdate(!update);
  };

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      if (localTheme) setTheme(localTheme as ThemeMode);
    } catch {
      setMode('light');
    }

    setMountedComponent(true);
  }, []);

  return { themeMode, themeToggler, mountedComponent };
};

export default useDarkMode;
