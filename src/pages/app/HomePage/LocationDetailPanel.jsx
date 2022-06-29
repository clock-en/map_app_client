import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { MyLineBreakText } from 'components/elements/MyLineBreakText';

const LocationDetailPanelRoot = styled(Box)(() => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '2em',
  backgroundColor: '#fff',
}));

export const LocationDetailPanel = ({ location }) => (
  <LocationDetailPanelRoot sx={{ boxShadow: 3 }}>
    <Typography variant="h5" component="div">
      {location.name}
    </Typography>
    <Typography component="div">
      <MyLineBreakText content={location.description} />
    </Typography>
    <Box sx={{ textAlign: 'right' }}>
      <Link to={`/app/spots/${location.id}`}>詳細を表示</Link>
    </Box>
  </LocationDetailPanelRoot>
);

LocationDetailPanel.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};
