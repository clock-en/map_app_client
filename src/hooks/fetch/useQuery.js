import { useFetch } from './useFetch';

export const useQuery = (url) => {
  const { doFetch, ...rest } = useFetch(url);

  const query = () => {
    doFetch({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  };

  return { ...rest, query };
};
