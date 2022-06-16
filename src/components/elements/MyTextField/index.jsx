import React from 'react';
import { PropTypes } from 'prop-types';
import { Box, TextField } from '@mui/material';

export const MyTextField = ({ value, onChange, type, label, error }) => (
  <Box sx={{ marginBottom: '1em' }}>
    <TextField
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      error={error ? true : false}
      helperText={error}
      fullWidth
    />
  </Box>
);

MyTextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

MyTextField.defaultProps = {
  type: 'text',
  label: undefined,
  error: undefined,
};
