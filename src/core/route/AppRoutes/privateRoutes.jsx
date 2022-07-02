import React from 'react';
import { RequireAuth } from 'core/route/RequireAuth';
import { MyDefaultLayoutContainer } from 'container/MyDefaultLayoutContainer';
import { HomePage } from 'pages/app/HomePage';
import { MyPage } from 'pages/app/MyPage';
import { SpotCreatePage } from 'pages/app/spots/SpotCreatePage';
import { SpotEditPage } from 'pages/app/spots/SpotEditPage';
import { SpotDetailPage } from 'pages/app/spots/SpotDetailPage';
import { ProfilePage } from 'pages/app/settings/ProfilePage';

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
      { path: 'spots/create', element: <SpotCreatePage /> },
      { path: 'spots/edit/:id', element: <SpotEditPage /> },
      { path: 'spots/:id', element: <SpotDetailPage /> },
      { path: 'settings/profile', element: <ProfilePage /> },
    ],
  },
];
