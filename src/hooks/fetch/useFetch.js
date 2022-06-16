import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const parseInputErrors = (errorResData) =>
  errorResData.reduce((acc, value) => {
    acc[value.loc[1]] = value.msg;
    return acc;
  }, {});

export const useFetch = (url) => {
  const [data, setSetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputErrors, setInputErrors] = useState(null);
  const navigate = useNavigate();

  const doFetch = async (options) => {
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json = await res.json();
      if (res.status === 422) {
        setInputErrors(parseInputErrors(json.detail));
        return;
      }
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('identified_token');
        navigate('/auth/signin');
      }
      if (res.status >= 400) {
        throw new Error(json.detail);
      }
      setSetData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, inputErrors, doFetch };
};
