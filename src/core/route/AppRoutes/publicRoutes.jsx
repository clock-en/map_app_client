import React from 'react';
import { ErrorPage } from 'pages/ErrorPage';

export const publicRoutes = [{ path: '*', element: <ErrorPage code={404} /> }];
