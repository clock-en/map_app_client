import { createTheme } from '@mui/material';
import { breakpoints } from './breakpoints';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';
import { others } from './others';

export const theme = createTheme({
  breakpoints,
  components,
  palette,
  typography,
  ...others,
});
