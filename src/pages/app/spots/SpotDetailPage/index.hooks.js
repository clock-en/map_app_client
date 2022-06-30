import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'hooks/fetch';

export const useView = () => {
  const { id } = useParams();
  const {
    data: spot,
    loading: spotLaoding,
    error: spotError,
    query: spotQuery,
  } = useQuery(`/spots/${id}`);

  const {
    data: comments,
    loading: commentsLaoding,
    error: commentsError,
    query: commentsQuery,
  } = useQuery(`/comments`);

  // ログイン成功時の処理
  useEffect(() => {
    spotQuery();
    commentsQuery({ spot_id: id });
  }, []);

  return {
    spot,
    spotLaoding,
    spotError,
    comments,
    commentsLaoding,
    commentsError,
  };
};
