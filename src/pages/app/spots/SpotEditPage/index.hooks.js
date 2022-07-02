import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutate, useQuery } from 'hooks/fetch';

export const useView = () => {
  const { id } = useParams();
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [latInput, setLatInput] = useState('');
  const [lngInput, setLngInput] = useState('');

  const {
    data: spot,
    loading: spotLaoding,
    error: spotError,
    query,
  } = useQuery(`/spots/${id}`);

  const {
    data: modifiedData,
    loading: modifyLoading,
    error: modifyError,
    inputErrors,
    mutate,
  } = useMutate(`/spots/${id}`, 'PUT');

  useEffect(() => {
    query({ is_own: true });
  }, []);

  useEffect(() => {
    if (spot) {
      setNameInput(spot.name);
      setDescriptionInput(spot.description);
      setLatInput(spot.latitude);
      setLngInput(spot.longitude);
    }
  }, [spot]);

  useEffect(() => {
    if (spotError) {
      // eslint-disable-next-line no-alert
      window.alert('予期せぬエラーが発生しました');
    }
  }, [spotError]);

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
    if (!spot) {
      return;
    }
    mutate({
      id,
      name: nameInput,
      description: descriptionInput,
      latitude: latInput,
      longitude: lngInput,
      updated_at: spot.updated_at,
    });
  };

  return {
    nameInput,
    descriptionInput,
    latInput,
    lngInput,
    spotLaoding,
    modifiedData,
    modifyLoading,
    modifyError,
    inputErrors,
    handleChangeName,
    handleChangeDescription,
    handleChangeLat,
    handleChangeLng,
    handleSubmit,
  };
};
