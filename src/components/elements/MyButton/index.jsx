import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';

export const MyButton = ({ caption, type, to, loading, onClick }) => (
  <Button
    variant="contained"
    type={to ? undefined : type}
    component={to ? Link : 'button'}
    to={to}
    onClick={onClick}
  >
    {loading ? <CircularProgress /> : caption}
  </Button>
);

MyButton.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  type: 'button',
  to: undefined,
  loading: undefined,
  onClick: undefined,
};
