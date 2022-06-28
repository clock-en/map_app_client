import { useFetch } from './useFetch';

export const useQuery = (url) => {
  const { doFetch, ...rest } = useFetch(url);

  const query = (params) => {
    const querystring = params ? new URLSearchParams(params) : undefined;
    doFetch(
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
      querystring
    );
  };

  return { ...rest, query };
};
