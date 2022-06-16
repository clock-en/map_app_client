import { useFetch } from './useFetch';

export const useMutateInFormFormat = (url) => {
  const { doFetch, ...rest } = useFetch(url);

  const mutate = (body) => {
    const formData = new URLSearchParams();
    if (body && typeof body === 'object' && body.constructor === Object) {
      Object.keys(body).forEach((key) => {
        formData.append(key, body[key]);
      });
    }
    doFetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
  };

  return { ...rest, mutate };
};