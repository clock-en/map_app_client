import React from 'react';
import { Typography, Box, FormHelperText } from '@mui/material';
import { MyButton } from 'components/elements/MyButton';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyCard } from 'components/elements/MyCard';
import { MyTextField } from 'components/elements/MyTextField';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const SpotsCreatePage = () => {
  const view = hooks.useView();
  return (
    <MyRootContainer>
      <Typography variant="h2" component="h1" sx={{ marginBottom: '0.5em' }}>
        スポット登録
      </Typography>
      <MyCard>
        <styled.Form onSubmit={view.handleSubmit} noValidate>
          <MyTextField
            type="text"
            label="スポット名"
            value={view.nameInput}
            onChange={view.handleChangeName}
            error={view.inputErrors ? view.inputErrors.name : undefined}
          />
          <styled.LatLngWrapper>
            {view.inputErrors && view.inputErrors.location && (
              <FormHelperText error sx={{ marginBottom: '1em' }}>
                {view.inputErrors.location}
              </FormHelperText>
            )}
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
          <Box sx={{ marginBottom: '1em' }}>
            <MyButton type="submit" caption="登録" loading={view.loading} />
          </Box>
        </styled.Form>
      </MyCard>
    </MyRootContainer>
  );
};
