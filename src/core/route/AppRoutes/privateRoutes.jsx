import React from 'react';
import { RequireAuth } from 'core/route/RequireAuth';
import { MyDefaultLayout } from 'components/layouts/MyDefaultLayout';
import { HomePage } from 'pages/app/HomePage';

export const privateRoutes = [
  {
    path: '/app',
    element: (
      <RequireAuth>
        <MyDefaultLayout />
      </RequireAuth>
    ),
    children: [{ path: '', element: <HomePage /> }],
  },
];
