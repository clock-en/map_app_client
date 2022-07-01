import { useFetch } from './useFetch';

export const useMutate = (resourcePath, method = 'POST') => {
  const { doFetch, ...rest } = useFetch(resourcePath);

  const mutate = (body) => {
    const token = localStorage.getItem('identified_token');
    doFetch({
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
  };

  return { ...rest, mutate };
};
