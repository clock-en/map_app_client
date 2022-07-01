import { useState, useEffect } from 'react';
import { useQuery, useMutate } from 'hooks/fetch';

export const useView = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const {
    data: user,
    loading: userLoading,
    error: userError,
    query: userQuery,
  } = useQuery('/users/me');

  const {
    data: modifiedData,
    loading: modifyLoading,
    error: modifyError,
    inputErrors,
    mutate,
  } = useMutate('/users/me', 'PUT');

  useEffect(() => {
    userQuery();
  }, []);

  useEffect(() => {
    if (user) {
      setNameInput(user.name);
      setEmailInput(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (userError) {
      // eslint-disable-next-line no-alert
      window.alert('予期せぬエラーが発生しました');
    }
  }, [userError]);

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      return;
    }
    mutate({
      name: nameInput,
      email: emailInput,
      updated_at: user.updated_at,
    });
  };

  return {
    nameInput,
    emailInput,
    userLoading,
    modifiedData,
    modifyLoading,
    modifyError,
    inputErrors,
    handleChangeName,
    handleChangeEmail,
    handleSubmit,
  };
};
