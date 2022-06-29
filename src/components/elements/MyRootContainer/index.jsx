import React from 'react';
import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';

export const MyRootContainer = ({ children }) => (
  <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '4em 50px' }}>
    {children}
  </Box>
);

MyRootContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
