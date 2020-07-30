import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa';

const styles = makeStyles((theme) => ({
  listItem: {
    '&:hover': {
      background: theme.palette.secondary.light,
    },
  },
}));
const AccountList = () => {
  const classes = styles();
  return (
    <List>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <FaShoppingBag />
        </ListItemIcon>
        <ListItemText primary='Orders' />
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <FaUserAlt />
        </ListItemIcon>
        <ListItemText primary='Account' />
      </ListItem>
    </List>
  );
};

export default AccountList;
