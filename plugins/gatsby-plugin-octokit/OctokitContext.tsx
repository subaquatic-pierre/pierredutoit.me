import React from 'react';
import { Octokit } from '@octokit/core';

const githubToken = process.env.GATSBY_GITHUB_TOKEN;

export const OctokitContext = React.createContext(undefined);

interface Props {
  children: React.ReactNode;
}

export default function OctokitProvider({ children }: Props) {
  const octokit = new Octokit({ auth: githubToken });
  return (
    <OctokitContext.Provider value={octokit}>
      {children}
    </OctokitContext.Provider>
  );
}
