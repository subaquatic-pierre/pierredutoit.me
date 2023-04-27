import React from 'react';

import { Octokit } from '@octokit/core';

import Main from 'layouts/Main';

import Container from 'components/Container';
import PortfolioHero from 'components/PortfolioHero';
import PortfolioMain from 'components/PortfolioMain';
import Partners from 'components/Partners';
import PortfolioPlaceholder from 'components/PortfolioPlaceholder';

import { githubUsername } from 'const';
const githubToken = process.env.REACT_APP_GIT_AUTH_TOKEN;

const PortfolioGrid = (): JSX.Element => {
  const [allProjects, setAllProjects] = React.useState<ProjectMetaData[]>([]);
  const [projectsLoaded, setProjectsLoaded] = React.useState(false);

  const octokit = new Octokit({ auth: githubToken });

  // TODO: Implement infinite scroll for projects
  // const [projectsMetaData, setProjectsMetaData] = React.useState<
  //   ProjectMetaData[]
  // >([]);
  // const [currentPagIndex, setCurrentPagIndex] = React.useState<number>(0);

  // const updateProjects = () => {
  //   console.log('update projects');
  //   const newIndex = currentPagIndex + 3;
  //   const newElements = allProjects.slice(newIndex, newIndex + 3);
  //   // setProjectsMetaData((oldElements) => [...oldElements, ...newElements]);
  //   // console.log('update projects');
  //   console.log(newElements);
  //   setCurrentPagIndex(newIndex + 3);
  // };

  // const addInfiniteScrollListener = () => {
  //   return window.addEventListener('scroll', handleInfiniteScroll);
  // };
  // const removeInfiniteScrollListener = () => {
  //   return window.removeEventListener('scroll', handleInfiniteScroll);
  // };

  // const handleInfiniteScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >=
  //     document.body.offsetHeight - 50
  //   ) {
  //     removeInfiniteScrollListener();
  //     setTimeout(updateProjects, 1000);
  //   }
  // };

  const getProjects = async () => {
    const response = await octokit.request(
      `GET /repos/${githubUsername}/projects/contents/index.json`,
    );

    const { content } = response.data;

    // Decode base64 string
    const encoded = atob(content);
    const projects = JSON.parse(encoded);
    setAllProjects(projects);
    setProjectsLoaded(true);
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <Main>
      <Container>
        <PortfolioHero />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners />
      </Container>
      <Container>
        {projectsLoaded ? (
          <PortfolioMain projectMetaData={allProjects} />
        ) : (
          <PortfolioPlaceholder />
        )}
      </Container>
    </Main>
  );
};

export default PortfolioGrid;
