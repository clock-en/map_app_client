import React, { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper } from '@googlemaps/react-wrapper';
import { MyGoogleMapMarker } from './MyGoogleMapMarker';
import { Map } from './index.styled';

export const MyGoogleMap = ({ center, zoom, locations }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
  });

  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <Map ref={ref}>
        {map &&
          locations.map((location) => (
            <MyGoogleMapMarker
              map={map}
              location={location}
              key={location.id}
            />
          ))}
      </Map>
    </Wrapper>
  );
};

MyGoogleMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    })
  ),
};

MyGoogleMap.defaultProps = {
  locations: [],
};
