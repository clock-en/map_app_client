import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutateInFormFormat } from 'hooks/fetch';

export const useView = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();
  const { data, loading, error, inputErrors, mutate } =
    useMutateInFormFormat('/auth/login');

  const handleChangeUsername = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      username: usernameInput,
      password: passwordInput,
    });
  };

  // ログイン成功時の処理
  useEffect(() => {
    if (data) {
      localStorage.setItem('identified_token', data.token);
      navigate('/app');
    }
  }, [data]);

  return {
    usernameInput,
    passwordInput,
    loading,
    error,
    inputErrors,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
  };
};
