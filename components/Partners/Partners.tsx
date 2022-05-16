import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import bootstrap from 'assets/svg/bootstrap-4.svg';
import css3 from 'assets/svg/css3.svg';
import gatsby from 'assets/svg/gatsby.svg';
import github from 'assets/svg/github-icon-1.svg';
import graphql from 'assets/svg/graphql.svg';
import html5 from 'assets/svg/html5.svg';
import material from 'assets/svg/material-ui-1.svg';
import mongodb from 'assets/svg/mongodb.svg';
import node from 'assets/svg/node-js-logo.svg';
import python from 'assets/svg/python3.svg';
import typescript from 'assets/svg/typescriptlang-icon.svg';
import sass from 'assets/svg/sass-1.svg';
import react from 'assets/svg/react-2.svg';

const mock = [
  react,
  python,
  typescript,
  material,
  bootstrap,
  html5,
  css3,
  gatsby,
  github,
  graphql,
  node,
];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const some = true;
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {mock.map((item, i) => (
        <Box
          maxWidth={{ xs: 40, sm: 50 }}
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >
          <Box
            component="img"
            height={1}
            width={1}
            src={item}
            alt="..."
            sx={{
              filter:
                mode === 'light'
                  ? 'grayscale(100%)'
                  : 'grayscale(100%) invert(100%)',
              opacity: '0.7',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Partners;
