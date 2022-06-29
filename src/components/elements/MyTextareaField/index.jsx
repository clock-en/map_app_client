import React from 'react';
import { PropTypes } from 'prop-types';
import { Box, TextField } from '@mui/material';

export const MyTextareaField = ({ value, onChange, label, error, rows }) => (
  <Box sx={{ marginBottom: '1em' }}>
    <TextField
      label={label}
      value={value}
      multiline
      rows={rows}
      onChange={onChange}
      error={error ? true : false}
      helperText={error}
      fullWidth
      variant="standard"
    />
  </Box>
);

MyTextareaField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
};

MyTextareaField.defaultProps = {
  label: undefined,
  error: undefined,
  rows: 4,
};
