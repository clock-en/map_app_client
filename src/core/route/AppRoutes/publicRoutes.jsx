import React from 'react';
import { Navigate } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';

export const publicRoutes = [
  { path: '', element: <Navigate to="/app" /> },
  { path: '*', element: <ErrorPage code={404} /> },
];
