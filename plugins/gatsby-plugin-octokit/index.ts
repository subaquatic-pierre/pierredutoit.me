import React from 'react';
import { OctokitContext } from './OctokitContext';

export const useOctokit = () => {
  const octokit = React.useContext(OctokitContext);
  return octokit;
};
