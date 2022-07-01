import React from 'react';
import { Typography, Box } from '@mui/material';
import { MyLoadingLayer } from 'components/elements/MyLoadingLayer';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyButton } from 'components/elements/MyButton';
import { MyCard, MyCardRecord } from 'components/elements/MyCard';
import { MyListCard, MyListCardItems } from 'components/elements/MyListCard';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const MyPage = () => {
  const view = hooks.useView();
  return (
    <MyRootContainer>
      <Typography variant="h2" component="h1" sx={{ marginBottom: '0.5em' }}>
        マイページ
      </Typography>
      {view.user && (
        <>
          <MyCard>
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: '0.5em' }}
            >
              基本情報
            </Typography>
            <MyCardRecord name="ユーザー名" value={view.user.name} />
            <MyCardRecord name="メールアドレス" value={view.user.email} />
            <Box sx={{ textAlign: 'right' }}>
              <MyButton
                to="/app/settings/profile"
                caption="アカウント情報修正"
              />
            </Box>
            <MyLoadingLayer loading={view.userLoading} dependsParent />
          </MyCard>
          {view.spotItems && (
            <MyListCard>
              <styled.SpotHeader>
                <Typography variant="h4" component="h2">
                  登録したスポット
                </Typography>
                <MyButton to="/app/spots/create" caption="スポット登録" />
              </styled.SpotHeader>
              {view.spotsError && (
                <styled.ErrorMessage>
                  スポット情報を読み込めませんでした。
                </styled.ErrorMessage>
              )}
              {view.spotItems.length ? (
                <MyListCardItems items={view.spotItems} />
              ) : (
                <styled.ErrorMessage>
                  登録したスポットはありません
                </styled.ErrorMessage>
              )}
              <MyLoadingLayer loading={view.spotsLoading} dependsParent />
            </MyListCard>
          )}
        </>
      )}
    </MyRootContainer>
  );
};
