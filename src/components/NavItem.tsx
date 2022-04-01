import React from 'react';

import { useLocation } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  item: {
    title: string;
    href: string;
  };
}

const NavItem = ({ item }: Props) => {
  const path = useLocation();
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      marginLeft={4}
      sx={{
        '& a': {
          textDecoration: path.pathname === item.href ? 'underline' : 'none',
          color: mode === 'light' ? 'GrayText' : 'inherit',
        },
      }}
    >
      <Typography component="a" href="/contact" title="theFront" variant="h6">
        {item.title}
      </Typography>
    </Box>
  );
};

export default NavItem;
