import React from 'react';
import Image from 'components/Image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface Props {
  pages: {
    main: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { main: mainNav } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display="flex"
          component="a"
          href="/"
          title="Pierre du Toit"
          width={{ xs: 100, md: 120 }}
          mt={2}
          sx={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Image
            alt="Logo"
            src={
              mode === 'light'
                ? '/assets/Logo-dark.png'
                : '/assets/Logo-light.png'
            }
            height={18}
            width={100}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {mainNav.map((item, index) => (
          <Box marginTop={2} key={index}>
            <Button
              variant="text"
              color="primary"
              fullWidth
              component="a"
              href={item.href}
              sx={{
                textTransform: 'uppercase',
                color: 'text.primary',
              }}
            >
              {item.title}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarNav;
