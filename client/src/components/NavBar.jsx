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

  [theme.breakpoints.up('xs')]: {
    icon: {
      color: theme.palette.secondary.dark,
      margin: 5,
      fontSize: 20,
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
      fontSize: 20,
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

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };
  return (
    <AppBar position='static' color='nuetral'>
      <Toolbar className={classes.toolbar}>
        <IconButton disableFocusRipple={true} className={classes.menu}>
          <RiMenu5Line className={classes.menu} onClick={toggleDrawer} />
        </IconButton>
        <div className='flex items-center justify-center'>
          <Logo />
          <TopNav className={classes.topNav} />
        </div>

        <div className='flex'>
          <IconButton>
            <GoSearch className={classes.icon} />
          </IconButton>
          <IconButton>
            <MdShoppingCart className={classes.icon} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
