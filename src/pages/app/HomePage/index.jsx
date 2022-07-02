import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { MyLoadingLayer } from 'components/elements/MyLoadingLayer';
import { MyGoogleMap } from 'container/MyGoogleMap';
import { LocationDetailPanel } from './LocationDetailPanel';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const HomePage = () => {
  const view = hooks.useView();
  return (
    <styled.PageRoot>
      {view.spots && (
        <>
          <MyGoogleMap
            center={{ lat: 35.68142354732969, lng: 139.76709261114823 }}
            zoom={15}
            locations={view.spots}
            onClickMarker={view.handleMarkerClick}
          />
          {view.selectedSpot && (
            <LocationDetailPanel location={view.selectedSpot} />
          )}
          <styled.AdditionalButton>
            <Fab
              component={Link}
              to="/app/spots/create"
              color="primary"
              aria-label="add"
              title="スポットを登録"
            >
              <AddIcon />
            </Fab>
          </styled.AdditionalButton>
        </>
      )}
      <MyLoadingLayer loading={view.loading} dependsParent />
    </styled.PageRoot>
  );
};
