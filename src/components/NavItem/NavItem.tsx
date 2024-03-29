import React from 'react';

import { useLocation } from '@reach/router';
import { useTheme } from '@mui/material/styles';

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
          textDecoration: 'none',
          color: mode === 'light' ? theme.palette.text.primary : 'inherit',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            backgroundColor: mode === 'light' ? 'GrayText' : 'white',
            bottom: -5,
            left: 0,
            transform: path.pathname !== item.href ? 'scaleX(0)' : '',
            transformOrigin: 'bottom right',
            borderRadius: '2px'
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transition: 'transform 0.25s linear',
            transformOrigin: 'bottom left'
          }
        }
      }}
    >
      <Typography
        component="a"
        href={item.href}
        title={item.title}
        variant="h6"
        sx={{
          position: 'relative',
          fontWeight: path.pathname === item.href ? 600 : 400
        }}
      >
        {item.title}
      </Typography>
    </Box>
  );
};

export default NavItem;
