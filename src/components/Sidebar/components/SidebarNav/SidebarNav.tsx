import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import logoLight from 'assets/Logo-light.png';
import logoDark from 'assets/Logo-dark.png';

interface Props {
  pages: {
    main: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { main } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Pierre du Toit"
          width={{ xs: 100, md: 120 }}
          mt={2}
        >
          <Box
            component={'img'}
            src={mode === 'light' ? logoDark : logoLight}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {main.map((item, index) => (
          <Box marginTop={2} key={index}>
            <Button
              variant="text"
              color="primary"
              fullWidth
              component="a"
              href={item.href}
              sx={{
                textTransform: 'uppercase',
                color: 'text.primary'
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
