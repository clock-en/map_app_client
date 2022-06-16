import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const SignUpPageRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'reverse',
  width: '100%',
  maxHeight: '100%',
  height: '100vh',
}));

const SignUpFormBox = styled(Box)(() => ({
  padding: '2em',
  display: 'flex',
  alignItems: 'center',
  width: '50%',
  minHeight: 400,
  height: '100%',
}));

const SignUpImage = styled('div')(() => ({
  background: 'black',
  width: '50%',
  height: '100%',
}));

export const SignUpPage = () => (
  <SignUpPageRoot>
    <SignUpFormBox>SignUp</SignUpFormBox>
    <SignUpImage />
  </SignUpPageRoot>
);
