import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => (
  <AppBar position="relative" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Logo
      </Typography>
    </Toolbar>
  </AppBar>
);
