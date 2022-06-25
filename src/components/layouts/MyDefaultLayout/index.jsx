import React from 'react';
import { PropTypes } from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import {
  MyDefaultLayoutRoot,
  MyDefaultLayoutChildrenRoot,
} from './index.styled';

export const MyDefaultLayout = ({ onClickSignOut }) => (
  <MyDefaultLayoutRoot>
    <Header onClickSignOut={onClickSignOut} />
    <MyDefaultLayoutChildrenRoot>
      <Outlet />
    </MyDefaultLayoutChildrenRoot>
  </MyDefaultLayoutRoot>
);

MyDefaultLayout.propTypes = {
  onClickSignOut: PropTypes.func.isRequired,
};
