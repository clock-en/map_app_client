import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { MyButton } from 'components/elements/MyButton';

const Logo = styled(Link)(() => ({
  color: '#fff',
  textDecoration: 'none',
}));

export const Header = ({ onClickSignOut }) => (
  <AppBar position="relative" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Logo to="/app">ReccomendLocation</Logo>
      </Typography>
      <MyButton href="/app/mypage" caption="マイページ" />
      <MyButton onClick={onClickSignOut} caption="ログアウト" />
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  onClickSignOut: PropTypes.func.isRequired,
};
