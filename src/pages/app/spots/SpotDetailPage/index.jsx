import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyLineBreakText } from 'components/elements/MyLineBreakText';
import { MyGoogleMap } from 'container/MyGoogleMap';
import { MyCard } from 'components/elements/MyCard';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const SpotDetailPage = () => {
  const view = hooks.useView();
  return (
    <MyRootContainer>
      <div>
        {view.location && (
          <>
            <Typography
              variant="h2"
              component="h1"
              sx={{ marginBottom: '0.5em' }}
            >
              <Link to="/app">
                <ArrowBackIcon fontSize="inherit" />
              </Link>
              {view.location.name}
            </Typography>
            <MyCard>
              <styled.GoogleMapFrame>
                <styled.GoogleMapFrameInner>
                  <MyGoogleMap
                    center={{
                      lat: view.location.latitude,
                      lng: view.location.longitude,
                    }}
                    zoom={15}
                    locations={[view.location]}
                  />
                </styled.GoogleMapFrameInner>
              </styled.GoogleMapFrame>
              <Typography
                variant="h4"
                component="h2"
                sx={{ margin: '0.5em 0' }}
              >
                おすすめポイント
              </Typography>
              <Typography component="div">
                <MyLineBreakText content={view.location.description} />
              </Typography>
            </MyCard>
          </>
        )}
      </div>
    </MyRootContainer>
  );
};
