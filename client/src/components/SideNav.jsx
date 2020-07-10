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
import { Link } from 'react-router-dom';
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
        <ListItem>
          <Link to='/Shop/new'>New Releases</Link>
        </ListItem>
        <ListItem>
          <Link to='/Shop/best'>Best Sellers</Link>
        </ListItem>
        <ListItem>
          <Link to='/Stacks'>Stacks</Link>
        </ListItem>
        <Accordion>
          <AccordionSummary>Catagories</AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Link to='/Shop/longevity'>Life Extension</Link>
              </ListItem>
              <ListItem>
                <Link to='/Shop/cognitive'>Cognitive Enhancement</Link>
              </ListItem>
              <ListItem>
                <Link to='/Shop/mood'>Mood Balance</Link>
              </ListItem>
              <ListItem>
                <Link to='/Shop/essential'>Essential</Link>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <ListItem>
          <Link to='/about'>About Us</Link>
        </ListItem>
        <ListItem>
          <Link to='/contact'>Contact</Link>
        </ListItem>
        <ListItem>
          <Link to='/shipping'>Shipping</Link>
        </ListItem>
        <ListItem>
          <Link tot='/faq'>FAQs</Link>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default SideNav;
