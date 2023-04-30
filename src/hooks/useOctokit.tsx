import React, { useContext } from 'react';
import { OctokitContext } from 'layout/Layout';
import { Octokit } from 'octokit';

const useOctokit = (): { octokit: Octokit; githubUsername: string } => {
  return useContext(OctokitContext);
};

export default useOctokit;
