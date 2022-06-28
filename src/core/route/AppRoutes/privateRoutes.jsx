import React from 'react';
import { RequireAuth } from 'core/route/RequireAuth';
import { MyDefaultLayoutContainer } from 'container/MyDefaultLayoutContainer';
import { HomePage } from 'pages/app/HomePage';
import { MyPage } from 'pages/app/MyPage';
import { SpotsCreatePage } from 'pages/app/spots/SpotsCreatePage';

export const privateRoutes = [
  {
    path: '/app',
    element: (
      <RequireAuth>
        <MyDefaultLayoutContainer />
      </RequireAuth>
    ),
    children: [
      { path: '', element: <HomePage /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'spots/create', element: <SpotsCreatePage /> },
    ],
  },
];
