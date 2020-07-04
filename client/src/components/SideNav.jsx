import React, { useContext } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app.context';
import { TOGGLE_DRAWER } from '../reducers/types';
import {
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@material-ui/core';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SideNav = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <SwipeableDrawer
      anchor='left'
      color='primary'
      open={state.drawerIsOpen}
      onOpen={() => dispatch({ type: TOGGLE_DRAWER })}
      onClose={() => dispatch({ type: TOGGLE_DRAWER })}>
      <List>
        <ListItem>New Releases</ListItem>
        <ListItem>Best Sellers</ListItem>
        <ListItem>Stacks</ListItem>
        <Accordion>
          <AccordionSummary>Catagories</AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>Life Extension</ListItem>
              <ListItem>Cognative Enhancement</ListItem>
              <ListItem>Mood Balance</ListItem>
              <ListItem>Essential</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <ListItem>About Us</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>Shipping</ListItem>
        <ListItem>FAQs</ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default SideNav;
