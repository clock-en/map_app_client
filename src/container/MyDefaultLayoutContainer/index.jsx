import React from 'react';
import { MyDefaultLayout } from 'components/layouts/MyDefaultLayout';
import { useView } from './index.hooks';

export const MyDefaultLayoutContainer = () => {
  const { handleClickSignOut } = useView();
  return <MyDefaultLayout onClickSignOut={handleClickSignOut} />;
};
