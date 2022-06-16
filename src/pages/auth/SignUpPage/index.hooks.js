import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutate } from 'hooks/fetch';

export const useView = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();
  const { data, loading, error, inputErrors, mutate } = useMutate(
    'http://localhost:8000/api/users'
  );

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    });
  };

  // ログイン成功時の処理
  useEffect(() => {
    if (data) {
      navigate('/auth/signin');
    }
  }, [data]);

  return {
    nameInput,
    emailInput,
    passwordInput,
    loading,
    error,
    inputErrors,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
};
