import React from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

const MyLineBreakTextRoot = styled('span')(() => ({
  whiteSpace: 'pre-wrap',
}));

export const MyLineBreakText = ({ content }) => (
  <MyLineBreakTextRoot>{content}</MyLineBreakTextRoot>
);

MyLineBreakText.propTypes = {
  content: PropTypes.string.isRequired,
};
