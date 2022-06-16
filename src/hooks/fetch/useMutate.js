import { useFetch } from './useFetch';

export const useMutate = (url) => {
  const { doFetch, ...rest } = useFetch(url);

  const mutate = (body) => {
    doFetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
  };

  return { ...rest, mutate };
};
