import React from 'react';
import { AppProvider } from 'core/provider';
import { AppRoutes } from 'core/route';

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
