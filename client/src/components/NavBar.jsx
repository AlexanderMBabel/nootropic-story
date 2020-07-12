import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';
import { MdShoppingCart } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { makeStyles } from '@material-ui/core/styles';
import { RiMenu5Line } from 'react-icons/ri';
import { AppContext } from '../context/app.context';
import { TOGGLE_DRAWER } from '../reducers/types';
import { IconButton } from '@material-ui/core';
import TopNav from './TopNav';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hamburger: {
    border: 'none',
    '&:focus': {
      border: 'none',
    },
  },
  iconButton: {
    position: 'relative',
    '&:focus': {
      outline: 'none',
    },
  },
  cartNumber: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    color: 'white',
    '& p': {
      fontFamily: 'Poppins',
      fontSize: '1rem',
    },
  },
  [theme.breakpoints.up('xs')]: {
    icon: {
      color: theme.palette.secondary.dark,
      margin: 5,
      fontSize: 25,
    },
    toolbar: {},
    logo: {},
    menu: {
      display: 'block',
    },
    topNav: {
      display: 'none',
    },
  },

  [theme.breakpoints.up('lg')]: {
    icon: {
      color: theme.palette.secondary.dark,
      margin: 5,
      fontSize: 25,
    },
    menu: {
      display: 'none',
    },
    topNav: {
      display: 'flex',
    },
  },

  // icon: {
  //   color: theme.palette.secondary.dark,
  //   margin: 5,
  //   fontSize: 20,
  // },
}));

const NavBar = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const numOfItems = cart.length;

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          disableFocusRipple={true}
          className={classes.menu}
          onClick={toggleDrawer}>
          <RiMenu5Line className={classes.menu} />
        </IconButton>
        <div className='flex items-center justify-center'>
          <Logo />
          <TopNav className={classes.topNav} />
        </div>

        <div className='flex'>
          <IconButton className={classes.iconButton}>
            <GoSearch className={classes.icon} />
          </IconButton>
          <Link to='/Cart'>
            <IconButton className={classes.iconButton}>
              {numOfItems > 0 && (
                <div className={classes.cartNumber}>
                  <p>{numOfItems}</p>
                </div>
              )}
              <MdShoppingCart className={classes.icon} />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
