import React from 'react';
import OctokitContext from './OctokitContext';

export const wrapRootElement = ({ element }) => {
  return <OctokitContext>{element}</OctokitContext>;
};
