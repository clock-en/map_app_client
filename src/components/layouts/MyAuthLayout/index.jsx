import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const MyAuthLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxHeight: '100%',
}));

const MyAuthLayoutChildrenRoot = styled('div')(() => ({
  height: '100%',
}));

export const MyAuthLayout = () => (
  <MyAuthLayoutRoot>
    <MyAuthLayoutChildrenRoot>
      <Outlet />
    </MyAuthLayoutChildrenRoot>
  </MyAuthLayoutRoot>
);
