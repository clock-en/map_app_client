import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyLineBreakText } from 'components/elements/MyLineBreakText';
import { MyGoogleMap } from 'container/MyGoogleMap';
import { MyCard } from 'components/elements/MyCard';
import { CommentList } from './CommentList';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const SpotDetailPage = () => {
  const view = hooks.useView();
  return (
    <MyRootContainer>
      <div>
        {view.spot && (
          <>
            <Typography
              variant="h2"
              component="h1"
              sx={{ marginBottom: '0.5em' }}
            >
              <Link to="/app">
                <ArrowBackIcon fontSize="inherit" />
              </Link>
              {view.spot.name}
            </Typography>
            <MyCard>
              <styled.GoogleMapFrame>
                <styled.GoogleMapFrameInner>
                  <MyGoogleMap
                    center={{
                      lat: view.spot.latitude,
                      lng: view.spot.longitude,
                    }}
                    zoom={15}
                    locations={[view.spot]}
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
                <MyLineBreakText content={view.spot.description} />
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                sx={{ margin: '0.5em 0' }}
              >
                コメント一覧
              </Typography>
              <CommentList comments={view.comments} />
            </MyCard>
          </>
        )}
      </div>
    </MyRootContainer>
  );
};
