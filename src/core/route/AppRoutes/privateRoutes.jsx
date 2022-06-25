import React from 'react';
import { RequireAuth } from 'core/route/RequireAuth';
import { MyDefaultLayoutContainer } from 'container/MyDefaultLayoutContainer';
import { HomePage } from 'pages/app/HomePage';

export const privateRoutes = [
  {
    path: '/app',
    element: (
      <RequireAuth>
        <MyDefaultLayoutContainer />
      </RequireAuth>
    ),
    children: [{ path: '', element: <HomePage /> }],
  },
];
