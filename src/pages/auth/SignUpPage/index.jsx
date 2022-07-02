import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, FormHelperText, Box } from '@mui/material';
import { MyTextField } from 'components/elements/MyTextField';
import { MyButton } from 'components/elements/MyButton';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const SignUpPage = () => {
  const view = hooks.useView();

  return (
    <styled.PageRoot>
      <styled.Contents>
        <Typography sx={{ marginBottom: '0.5em' }} variant="h1">
          新規登録
        </Typography>
        <styled.Form onSubmit={view.handleSubmit} noValidate>
          {view.error && (
            <FormHelperText error sx={{ marginBottom: '1em' }}>
              {view.error.message}
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
          <MyTextField
            type="password"
            label="パスワード"
            value={view.passwordInput}
            onChange={view.handleChangePassword}
            error={view.inputErrors ? view.inputErrors.password : undefined}
          />
          <Box sx={{ marginBottom: '1em' }}>
            <MyButton
              type="submit"
              caption="新規登録"
              loading={view.loading}
              disabled={view.loading}
            />
          </Box>
          <Box>
            <Link to="/auth/signin">アカウントお持ちの方</Link>
          </Box>
        </styled.Form>
      </styled.Contents>
      <styled.Image />
    </styled.PageRoot>
  );
};
