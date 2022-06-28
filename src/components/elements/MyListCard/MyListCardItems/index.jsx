import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
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
    <List>
      {items.map((i) => (
        <>
          <ListItem disablePadding key={i.id}>
            <ListItemButton component={i.to && Link} to={i.to}>
              <ListItemText primary={i.value} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

MyListCardItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
};
