import { useState, useEffect } from 'react';
import { useQuery } from 'hooks/fetch';

export const useView = () => {
  const { data: locations, loading, error, query } = useQuery('/spots');
  const [selectedLocation, setSelectedLocation] = useState();

  useEffect(() => {
    query();
  }, []);

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-alert
      window.alert('予期せぬエラーが発生しました');
    }
  }, [error]);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return {
    locations,
    loading,
    selectedLocation,
    handleMarkerClick,
  };
};
