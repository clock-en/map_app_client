import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

export const MyListCardItems = ({ items }) => {
  if (!items.length) {
    return null;
  }
  return (
    <List disablePadding>
      {items.map((i) => (
        <Box key={i.id}>
          <ListItem disablePadding>
            <ListItemButton component={i.to && Link} to={i.to}>
              <ListItemText primary={i.value} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
};

MyListCardItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
};
