import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

const MyLoadingLayerRoot = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
}));

export const MyLoadingLayer = ({ loading, dependsParent }) => {
  if (!loading) {
    return null;
  }
  if (dependsParent) {
    return (
      <MyLoadingLayerRoot>
        <CircularProgress />
      </MyLoadingLayerRoot>
    );
  }
  return <CircularProgress />;
};

MyLoadingLayer.propTypes = {
  loading: PropTypes.bool.isRequired,
  dependsParent: PropTypes.bool,
};
MyLoadingLayer.defaultProps = {
  dependsParent: false,
};
