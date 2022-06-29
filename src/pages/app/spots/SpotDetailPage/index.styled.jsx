import styled from '@emotion/styled';

export const GoogleMapFrame = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  '&::after': {
    content: '""',
    display: 'block',
    paddingTop: '50%',
  },
}));

export const GoogleMapFrameInner = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}));
