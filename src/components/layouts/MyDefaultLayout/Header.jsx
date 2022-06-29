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

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Header = ({ onClickSignOut }) => (
  <>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Logo to="/app">ReccomendLocation</Logo>
        </Typography>
        <MyButton to="/app/mypage" caption="マイページ" />
        <MyButton onClick={onClickSignOut} caption="ログアウト" />
      </Toolbar>
    </AppBar>
    <Offset />
  </>
);

Header.propTypes = {
  onClickSignOut: PropTypes.func.isRequired,
};
