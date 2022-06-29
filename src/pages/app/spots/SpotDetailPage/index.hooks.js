import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'hooks/fetch';

export const useView = () => {
  const { id } = useParams();
  const {
    data: location,
    loading,
    error,
    inputErrors,
    query,
  } = useQuery(`/spots/${id}`);

  // ログイン成功時の処理
  useEffect(() => {
    query();
  }, []);

  return {
    location,
    loading,
    error,
    inputErrors,
  };
};
