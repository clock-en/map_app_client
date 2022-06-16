import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const PageRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'reverse',
  width: '100%',
  maxHeight: '100%',
  height: '100vh',
}));

export const Contents = styled(Box)(() => ({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  width: '50%',
  minHeight: 450,
  height: '100%',
  padding: '2em',
}));

export const Form = styled('form')(() => ({
  margin: '1em 0',
  width: '100%',
  maxWidth: 450,
}));

export const Image = styled('div')(() => ({
  background: 'black',
  width: '50%',
  height: '100%',
}));
