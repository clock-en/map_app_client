import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';

export const MyButton = ({ caption, type, to, loading, onClick, disabled }) => (
  <Button
    variant="contained"
    type={to ? undefined : type}
    component={to ? Link : 'button'}
    to={to}
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? <CircularProgress size="1.75em" /> : caption}
  </Button>
);

MyButton.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  type: 'button',
  to: undefined,
  loading: undefined,
  disabled: undefined,
  onClick: undefined,
};
