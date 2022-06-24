import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, CircularProgress } from '@mui/material';

export const MyButton = ({ caption, type, href, loading, onClick }) => (
  <Button
    variant="contained"
    type={href ? undefined : type}
    href={href}
    onClick={onClick}
  >
    {loading ? <CircularProgress /> : caption}
  </Button>
);

MyButton.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  type: 'button',
  href: undefined,
  loading: undefined,
  onClick: undefined,
};
