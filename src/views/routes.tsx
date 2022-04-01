import React from 'react';

import {
  IndexView,
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
    path: '/not-found',
    renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
  },
];

export default routes;
