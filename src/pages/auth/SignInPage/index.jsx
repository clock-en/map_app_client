import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, FormHelperText, Box } from '@mui/material';
import { MyTextField } from 'components/elements/MyTextField';
import { MyButton } from 'components/elements/MyButton';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const SignInPage = () => {
  const view = hooks.useView();

  return (
    <styled.PageRoot>
      <styled.Contents>
        <Typography sx={{ marginBottom: '0.5em' }} variant="h1">
          おすすめの場所を
          <br />
          共有しよう
        </Typography>
        <styled.Form onSubmit={view.handleSubmit} noValidate>
          {view.error && (
            <FormHelperText error sx={{ marginBottom: '1em' }}>
              {view.error.message}
            </FormHelperText>
          )}
          <MyTextField
            type="email"
            label="メールアドレス"
            value={view.usernameInput}
            onChange={view.handleChangeUsername}
            error={view.inputErrors ? view.inputErrors.username : undefined}
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
              caption="サインイン"
              loading={view.loading}
              disabled={view.loading}
            />
          </Box>
          <Box>
            <Link to="/auth/signup">新規登録</Link>
          </Box>
        </styled.Form>
      </styled.Contents>
      <styled.Image />
    </styled.PageRoot>
  );
};
