import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutate } from 'hooks/fetch';

export const useView = () => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [latInput, setLatInput] = useState('');
  const [lngInput, setLngInput] = useState('');
  const navigate = useNavigate();
  const { data, loading, error, inputErrors, mutate } = useMutate('/spots');

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescriptionInput(e.target.value);
  };
  const handleChangeLat = (e) => {
    setLatInput(e.target.value);
  };
  const handleChangeLng = (e) => {
    setLngInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      name: nameInput,
      description: descriptionInput,
      latitude: latInput,
      longitude: lngInput,
    });
  };

  // ログイン成功時の処理
  useEffect(() => {
    if (data) {
      navigate('/app/mypage');
    }
  }, [data]);

  return {
    nameInput,
    descriptionInput,
    latInput,
    lngInput,
    loading,
    error,
    inputErrors,
    handleChangeName,
    handleChangeDescription,
    handleChangeLat,
    handleChangeLng,
    handleSubmit,
  };
};
