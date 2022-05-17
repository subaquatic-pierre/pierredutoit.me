import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import bootstrap from 'public/assets/svg/bootstrap-4.svg';
import css3 from 'public/assets/svg/css3.svg';
import gatsby from 'public/assets/svg/gatsby.svg';
import github from 'public/assets/svg/github-icon-1.svg';
import graphql from 'public/assets/svg/graphql.svg';
import html5 from 'public/assets/svg/html5.svg';
import material from 'public/assets/svg/material-ui-1.svg';
import node from 'public/assets/svg/node-js-logo.svg';
import python from 'public/assets/svg/python3.svg';
import typescript from 'public/assets/svg/typescriptlang-icon.svg';
import react from 'public/assets/svg/react-2.svg';

const images = [
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
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {images.map((item, i) => (
        <Box
          maxWidth={{ xs: 40, sm: 50 }}
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >
          <Image
            height={100}
            width={100}
            src={item}
            alt="..."
            style={{
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
