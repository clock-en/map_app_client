import styled from '@emotion/styled';

export const MyDefaultLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxHeight: '100vh',
}));

export const MyDefaultLayoutChildrenRoot = styled('div')(() => ({
  flex: 1,
}));
