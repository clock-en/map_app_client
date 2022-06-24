import { useState, useEffect } from 'react';
import { useQuery } from 'hooks/fetch';

export const useView = () => {
  const { data, loading, error, query } = useQuery('/spots');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    localStorage.getItem('identified_token');
    query();
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem('identified_token', data.token);
      setLocations(
        data.map((record) => ({
          id: record.id,
          latitude: record.latitude,
          longitude: record.longitude,
        }))
      );
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-alert
      window.alert('予期せぬエラーが発生しました');
    }
  }, [error]);

  return {
    locations,
    loading,
  };
};
