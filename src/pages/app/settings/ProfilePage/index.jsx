import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MyLoadingLayer } from 'components/elements/MyLoadingLayer';
import { MyButton } from 'components/elements/MyButton';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyCard } from 'components/elements/MyCard';
import { MyTextField } from 'components/elements/MyTextField';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const ProfilePage = () => {
  const view = hooks.useView();
  return (
    <MyRootContainer>
      <Typography variant="h2" component="h1" sx={{ marginBottom: '0.5em' }}>
        <Link to="/app/mypage">
          <ArrowBackIcon fontSize="inherit" />
        </Link>
        アカウント情報修正
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
            label="ユーザー名"
            value={view.nameInput}
            onChange={view.handleChangeName}
            error={view.inputErrors ? view.inputErrors.name : undefined}
          />
          <MyTextField
            type="email"
            label="メールアドレス"
            value={view.emailInput}
            onChange={view.handleChangeEmail}
            error={view.inputErrors ? view.inputErrors.email : undefined}
          />
          <Box sx={{ marginBottom: '1em', textAlign: 'right' }}>
            <MyButton
              type="submit"
              caption="保存"
              loading={view.modifyLoading}
              disabled={view.modifyLoading}
            />
          </Box>
          <MyLoadingLayer loading={view.userLoading} dependsParent />
        </styled.Form>
      </MyCard>
    </MyRootContainer>
  );
};
