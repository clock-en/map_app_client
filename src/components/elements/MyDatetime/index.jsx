import React from 'react';
import { PropTypes } from 'prop-types';
import dayjs from 'dayjs';

export const MyDatetime = ({ datetime }) => {
  const output = dayjs(datetime).format('YYYY-MM-DD HH:mm:ss');
  if (output === 'Invalid Date') {
    return null;
  }
  return <span>{output}</span>;
};

MyDatetime.propTypes = {
  datetime: PropTypes.string.isRequired,
};
