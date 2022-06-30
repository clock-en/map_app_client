import React from 'react';
import { CircularProgress } from '@mui/material';
import { MyGoogleMap } from 'container/MyGoogleMap';
import { LocationDetailPanel } from './LocationDetailPanel';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const HomePage = () => {
  const view = hooks.useView();
  if (view.loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <styled.PageRoot>
      <MyGoogleMap
        center={{ lat: 35.68142354732969, lng: 139.76709261114823 }}
        zoom={15}
        locations={view.spots}
        onClickMarker={view.handleMarkerClick}
      />
      {view.selectedLocation && (
        <LocationDetailPanel location={view.selectedLocation} />
      )}
    </styled.PageRoot>
  );
};
