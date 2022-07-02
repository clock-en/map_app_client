import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MyLoadingLayer } from 'components/elements/MyLoadingLayer';
import { MyButton } from 'components/elements/MyButton';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyCard } from 'components/elements/MyCard';
import { MyTextField } from 'components/elements/MyTextField';
import { MyTextareaField } from 'components/elements/MyTextareaField';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const SpotEditPage = () => {
  const view = hooks.useView();
  return (
    <MyRootContainer>
      <Typography variant="h2" component="h1" sx={{ marginBottom: '0.5em' }}>
        <Link to="/app/mypage">
          <ArrowBackIcon fontSize="inherit" />
        </Link>
        スポット編集
      </Typography>
      <MyCard>
        <styled.Form onSubmit={view.handleSubmit} noValidate>
          {view.modifyError && (
            <FormHelperText error sx={{ marginBottom: '1em' }}>
              {view.modifyError.message}
            </FormHelperText>
          )}
          {view.modifiedData && (
            <FormHelperText sx={{ marginBottom: '1em', color: 'green' }}>
              変更が完了しました
            </FormHelperText>
          )}
          <MyTextField
            type="text"
            label="スポット名"
            value={view.nameInput}
            onChange={view.handleChangeName}
            error={view.inputErrors ? view.inputErrors.name : undefined}
          />
          <styled.LatLngWrapper>
            <styled.LatLngField>
              <MyTextField
                type="text"
                label="緯度"
                value={view.latInput}
                onChange={view.handleChangeLat}
                error={view.inputErrors ? view.inputErrors.latitude : undefined}
              />
            </styled.LatLngField>
            <styled.LatLngField>
              <MyTextField
                type="text"
                label="経度"
                value={view.lngInput}
                onChange={view.handleChangeLng}
                error={
                  view.inputErrors ? view.inputErrors.longitude : undefined
                }
              />
            </styled.LatLngField>
          </styled.LatLngWrapper>
          {view.inputErrors && view.inputErrors.location && (
            <FormHelperText error sx={{ marginBottom: '1em' }}>
              {view.inputErrors.location}
            </FormHelperText>
          )}
          <MyTextareaField
            label="おすすめポイント"
            value={view.descriptionInput}
            onChange={view.handleChangeDescription}
            error={view.inputErrors ? view.inputErrors.description : undefined}
          />
          <Box sx={{ marginBottom: '1em', textAlign: 'right' }}>
            <MyButton
              type="submit"
              caption="登録"
              loading={view.modifyLoading}
              disabled={view.modifyLoading}
            />
          </Box>
          <MyLoadingLayer loading={view.spotLaoding} dependsParent />
        </styled.Form>
      </MyCard>
    </MyRootContainer>
  );
};
