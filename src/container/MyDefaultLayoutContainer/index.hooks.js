import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutate } from 'hooks/fetch';

export const useView = () => {
  const navigate = useNavigate();
  const { data, error, mutate } = useMutate(
    'http://localhost:8000/api/auth/logout'
  );

  const handleClickSignOut = () => {
    mutate();
  };

  useEffect(() => {
    if (data) {
      localStorage.removeItem('identified_token');
      navigate('/auth/signin');
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-alert
      window.alert('予期せぬエラーが発生しました');
    }
  }, [error]);

  return {
    handleClickSignOut,
  };
};
