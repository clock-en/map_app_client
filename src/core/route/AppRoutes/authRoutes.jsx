import React from 'react';
import { MyAuthLayout } from 'components/layouts/MyAuthLayout';
import { SignInPage } from 'pages/auth/SignInPage';
import { SignUpPage } from 'pages/auth/SignUpPage';

export const authRoutes = [
  {
    path: '/auth',
    element: <MyAuthLayout />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
];
