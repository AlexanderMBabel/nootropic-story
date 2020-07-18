import React from 'react';
import {
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={item.image} />
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.size} />
    </ListItem>
  );
};

export default CartItem;
