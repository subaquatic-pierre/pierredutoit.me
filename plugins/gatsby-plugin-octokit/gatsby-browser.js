import React from 'react';
import OctokitContext from './OctokitContext';

export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <OctokitContext pluginOptions={pluginOptions}>{element}</OctokitContext>
  );
};
