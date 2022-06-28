import React from 'react';
import { Typography } from '@mui/material';
import { MyRootContainer } from 'components/elements/MyRootContainer';
import { MyCard, MyCardRecord } from 'components/elements/MyCard';
import { MyListCard, MyListCardItems } from 'components/elements/MyListCard';
import * as hooks from './index.hooks';
import * as styled from './index.styled';

export const MyPage = () => {
  const { user, spotItems, spotsError } = hooks.useView();
  return (
    <MyRootContainer>
      <Typography variant="h2" component="h1" sx={{ marginBottom: '0.5em' }}>
        マイページ
      </Typography>
      {user && (
        <>
          <MyCard>
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: '0.5em' }}
            >
              基本情報
            </Typography>
            <MyCardRecord name="ユーザー名" value={user.name} />
            <MyCardRecord name="メールアドレス" value={user.email} />
          </MyCard>
          {spotItems && (
            <MyListCard>
              <Typography
                variant="h4"
                component="h2"
                sx={{ marginBottom: '0.5em', padding: '2rem 2rem 0' }}
              >
                登録したスポット
              </Typography>
              {spotsError && (
                <styled.ErrorMessage>
                  スポット情報を読み込めませんでした。
                </styled.ErrorMessage>
              )}
              {spotItems.length ? (
                <MyListCardItems items={spotItems} />
              ) : (
                <styled.ErrorMessage>
                  登録したスポットはありません
                </styled.ErrorMessage>
              )}
            </MyListCard>
          )}
        </>
      )}
    </MyRootContainer>
  );
};
