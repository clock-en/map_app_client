import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header } from './Header';

const MyDefaultLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxHeight: '100%',
}));

const MyDefaultLayoutChildrenRoot = styled('div')(() => ({
  height: '100%',
}));

export const MyDefaultLayout = () => (
  <MyDefaultLayoutRoot>
    <Header />
    <MyDefaultLayoutChildrenRoot>
      <Outlet />
    </MyDefaultLayoutChildrenRoot>
  </MyDefaultLayoutRoot>
);
