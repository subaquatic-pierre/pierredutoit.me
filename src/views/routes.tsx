import React from 'react';

import {
  IndexView,
  Home as HomeView,
  NotFound as NotFoundView,
  Contact as ContactView,
  Projects as ProjectView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <IndexView {...params} />,
  },
  {
    path: '/projects',
    renderer: (params = {}): JSX.Element => <ProjectView {...params} />,
  },
  {
    path: '/contact',
    renderer: (params = {}): JSX.Element => <ContactView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}): JSX.Element => <HomeView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
  },
];

export default routes;
