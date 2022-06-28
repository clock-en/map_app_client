import React from 'react';
import { PropTypes } from 'prop-types';
import { Paper } from '@mui/material';

export { MyListCardItems } from './MyListCardItems';

export const MyListCard = ({ children }) => (
  <Paper
    sx={{
      '& > *:first-child': { marginTop: '0' },
      '& > *:last-child': { marginBottom: '0' },
    }}
  >
    {children}
  </Paper>
);

MyListCard.propTypes = {
  children: PropTypes.element.isRequired,
};
