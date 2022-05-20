/* eslint-disable @typescript-eslint/no-explicit-any
 */
import React from 'react';
import { style } from '@mui/system';

interface Props {
  src: string;
  height: number;
  width: number;
  objectFit?: string;
  alt: string;
  style?: any;
}

const Image = ({
  src,
  height,
  width,
  objectFit,
  alt,
  ...rest
}: Props): JSX.Element => {
  return (
    <img
      src={src}
      height={height}
      width={width}
      style={{ ...style, objectFit: objectFit, objectPosition: 'center' }}
      alt={alt}
      {...rest}
    />
  );
};

export default Image;
