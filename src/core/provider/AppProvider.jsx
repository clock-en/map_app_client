import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'core/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const AppProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
