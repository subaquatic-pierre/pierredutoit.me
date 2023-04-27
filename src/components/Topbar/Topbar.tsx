import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import logo from 'assets/Logo.svg';

import NavItem from 'components/NavItem';
import ThemeModeToggler from 'components/ThemeModeToggler';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    main: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { main } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      height={60}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Pierre Du Toit"
        width={{ xs: 100, md: 180 }}
      >
        <Box
          component={'img'}
          src={logo}
          sx={{
            filter: mode === 'dark' && 'invert(100%)'
          }}
          height={1}
          width={1}
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex'
          }
        }}
        alignItems={'center'}
      >
        {main.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2)
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
