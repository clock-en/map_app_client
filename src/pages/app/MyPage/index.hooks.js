import { useState, useEffect } from 'react';
import { useQuery } from 'hooks/fetch';

export const useView = () => {
  const {
    data: user,
    loading: userLoading,
    error: userError,
    query: userQuery,
  } = useQuery('/users/me');
  const {
    data: spots,
    error: spotsError,
    query: spotsQuery,
  } = useQuery('/spots');
  const [spotItems, setSpotItems] = useState();

  useEffect(() => {
    userQuery();
  }, []);

  useEffect(() => {
    if (user) {
      spotsQuery({ user_id: user.id });
    }
  }, [user]);

  useEffect(() => {
    if (userError) {
      // eslint-disable-next-line no-alert
      window.alert('予期せぬエラーが発生しました');
    }
  }, [userError]);

  useEffect(() => {
    if (spots) {
      setSpotItems(
        spots.map((spot) => ({
          id: spot.id,
          value: spot.name,
          href: `/app/spots/${spot.id}`,
        }))
      );
    }
  }, [spots]);

  return {
    user,
    spotItems,
    spotsError,
    userLoading,
  };
};
