import { useFetch } from './useFetch';

export const useMutate = (resourcePath) => {
  const { doFetch, ...rest } = useFetch(resourcePath);

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
