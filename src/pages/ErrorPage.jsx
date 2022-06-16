import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const messages = {
  404: 'Not Found',
};

export const ErrorPage = ({ code }) => (
  <Typography variant="h1">{messages[code] ?? 'Error'}</Typography>
);

ErrorPage.propTypes = {
  code: PropTypes.number.isRequired,
};
