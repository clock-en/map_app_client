import styled from '@emotion/styled';

export const PageRoot = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
}));

export const AdditionalButton = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  right: '1em',
  transform: 'translate(0, -50%)',
}));
