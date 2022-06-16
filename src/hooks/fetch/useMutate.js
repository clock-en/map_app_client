import { useFetch } from './useFetch';

export const useMutate = (url) => {
  const { doFetch, ...rest } = useFetch(url);

  const mutate = (body) => {
    doFetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  return { ...rest, mutate };
};
