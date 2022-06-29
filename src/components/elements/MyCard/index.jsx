import React from 'react';
import { PropTypes } from 'prop-types';
import { Paper } from '@mui/material';

export { MyCardRecord } from './MyCardRecord';

export const MyCard = ({ children }) => (
  <Paper
    sx={{
      marginBottom: '2em',
      padding: '2em',
      '& > *:last-child': { marginBottom: '0' },
    }}
  >
    {children}
  </Paper>
);

MyCard.propTypes = {
  children: PropTypes.node.isRequired,
};
