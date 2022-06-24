import React from 'react';
import { CircularProgress } from '@mui/material';
import { MyGoogleMap } from 'container/MyGoogleMap';
import * as hooks from './index.hooks';

export const HomePage = () => {
  const { locations, loading } = hooks.useView();
  if (loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <MyGoogleMap
      center={{ lat: 35.68142354732969, lng: 139.76709261114823 }}
      zoom={15}
      locations={locations}
    />
  );
};
