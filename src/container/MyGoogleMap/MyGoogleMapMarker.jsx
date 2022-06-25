import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export const MyGoogleMapMarker = ({ map, location, onClick }) => {
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
      if (onClick) {
        marker.addListener('click', () => {
          onClick(location);
        });
      }
    }
  }, [marker, location]);

  return null;
};

MyGoogleMapMarker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  map: PropTypes.object.isRequired,
  location: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

MyGoogleMapMarker.defaultProps = {
  onClick: undefined,
};
