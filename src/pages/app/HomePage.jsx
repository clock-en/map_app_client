import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const HomePage = () => {
  const navigate = useNavigate();

  const signOut = async (callback) => {
    const response = await fetch('http://localhost:8000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          console.log('valid error', error);
          return;
        }
        const data = await res.json();
        callback(data);
      })
      .catch(() => {
        // サーバー通信失敗時の処理をここに書く
        console.log('サーバーエラーが発生しました');
      });

    return response;
  };

  const handleClickSignOut = () => {
    signOut(() => {
      localStorage.removeItem('identified_token');
      navigate('/auth/signin');
    });
  };

  return (
    <>
      <div>Home</div>
      <Button type="button" onClick={handleClickSignOut}>
        サインアウト
      </Button>
    </>
  );
};
