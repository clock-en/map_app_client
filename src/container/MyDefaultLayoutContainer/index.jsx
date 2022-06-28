import React from 'react';
import { MyDefaultLayout } from 'components/layouts/MyDefaultLayout';
import * as hooks from './index.hooks';

export const MyDefaultLayoutContainer = () => {
  const { handleClickSignOut } = hooks.useView();
  return <MyDefaultLayout onClickSignOut={handleClickSignOut} />;
};
