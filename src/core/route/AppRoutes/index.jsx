import React from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';
import { authRoutes } from './authRoutes';

export const AppRoutes = () => {
  const elements = useRoutes([
    ...privateRoutes,
    ...authRoutes,
    ...publicRoutes,
  ]);
  return <>{elements}</>;
};
