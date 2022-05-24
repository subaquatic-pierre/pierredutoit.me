import React from 'react';
import { Octokit } from '@octokit/core';

export const OctokitContext = React.createContext(undefined);

interface Props {
  children: React.ReactNode;
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  pluginOptions: any;
}

export default function OctokitProvider({ children, pluginOptions }: Props) {
  const octokit = new Octokit({ auth: pluginOptions.githubToken });
  return (
    <OctokitContext.Provider value={octokit}>
      {children}
    </OctokitContext.Provider>
  );
}
