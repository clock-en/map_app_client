import React from 'react';
import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';

export const MyRootContainer = ({ children }) => (
  <Box sx={{ maxWidth: '1000px', margin: '4em auto' }}>{children}</Box>
);

MyRootContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
