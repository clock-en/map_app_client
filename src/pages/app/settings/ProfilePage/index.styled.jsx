import styled from '@emotion/styled';

export const Form = styled('form')(() => ({
  position: 'relative',
  '& > *:last-child': { marginBottom: '0' },
}));
