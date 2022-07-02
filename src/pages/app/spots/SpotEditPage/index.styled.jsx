import styled from '@emotion/styled';

export const LatLngWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '1em',
}));
export const LatLngField = styled('div')(() => ({
  width: '12em',
}));

export const Form = styled('form')(() => ({
  position: 'relative',
  '& > *:last-child': { marginBottom: '0' },
}));
