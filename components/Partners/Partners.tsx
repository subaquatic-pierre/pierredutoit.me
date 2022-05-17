import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const images = [
  '/assets/svg/react-2.svg',
  '/assets/svg/python3.svg',
  '/assets/svg/typescriptlang-icon.svg',
  '/assets/svg/material-ui-1.svg',
  '/assets/svg/bootstrap-4.svg',
  '/assets/svg/html5.svg',
  '/assets/svg/css3.svg',
  '/assets/svg/gatsby.svg',
  '/assets/svg/github-icon-1.svg',
  '/assets/svg/graphql.svg',
  '/assets/svg/node-js-logo.svg',
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
