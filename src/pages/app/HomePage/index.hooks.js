import { useState, useEffect } from 'react';
import { useQuery } from 'hooks/fetch';

export const useView = () => {
  const { data: spots, loading, error, query } = useQuery('/spots');
  const [selectedSpot, setSelectedSpot] = useState();

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
    setSelectedSpot(location);
  };

  return {
    spots,
    loading,
    selectedSpot,
    handleMarkerClick,
  };
};
