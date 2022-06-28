import React from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

const MyCardRecordRoot = styled('div')(() => ({
  display: 'flex',
  padding: '1em 0',
}));

const MyCardRecordName = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '10em',
}));

const MyCardRecordValue = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  paddingLeft: '0.5em',
}));

export const MyCardRecord = ({ name, value }) => (
  <MyCardRecordRoot>
    <MyCardRecordName>{name}</MyCardRecordName>
    <MyCardRecordValue>{value}</MyCardRecordValue>
  </MyCardRecordRoot>
);

MyCardRecord.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

MyCardRecord.defaultProps = {
  value: '',
};
