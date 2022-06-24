import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export const MyGoogleMapMarker = ({ map, location }) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      const position = new window.google.maps.LatLng(
        location.latitude,
        location.longitude
      );
      marker.setOptions({ map, position });
    }
  }, [marker, location]);

  return null;
};

MyGoogleMapMarker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  map: PropTypes.object.isRequired,
  location: PropTypes.shape({
    id: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};
