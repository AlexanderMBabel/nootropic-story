import React, { useContext, useState } from 'react';

import { AppBar, Toolbar, IconButton, Popover } from '@material-ui/core';
import Logo from './Logo';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { makeStyles } from '@material-ui/core/styles';
import { RiMenu5Line } from 'react-icons/ri';
import { AppContext } from '../context/app.context';
import { TOGGLE_DRAWER } from '../reducers/types';
import TopNav from './TopNav';
import { useHistory } from 'react-router-dom';
import CartPreview from './CartPreview';
import Search from './Search';
import Account from './Account';

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
  menu: {
    '&:focus': {
      outline: 'none',
    },
  },
  cartNumber: {
    position: 'absolute',
    top: 7,
    right: 7,
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
  popover: {
    pointerEvents: 'none',
  },

  // icon: {
  //   color: theme.palette.secondary.dark,
  //   margin: 5,
  //   fontSize: 20,
  // },
}));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const numOfItems = cart.length;
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  const handleCartHover = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleSearchClick = (e) => {
    setSearchAnchorEl(e.currentTarget);
  };

  const handleCartClick = () => {
    history.push('/Cart');
  };

  const handleAccountClick = (e) => {
    setAccountAnchorEl(e.currentTarget);
  };

  const cartPopoverOpen = Boolean(anchorEl);
  const searchPopoverOpen = Boolean(searchAnchorEl);
  const accountPopoverOpen = Boolean(accountAnchorEl);

  // const cartPopoverId = cartPopoverOpen ? 'cart-popover' : undefined;

  const handleCartPopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSearchPopoverClose = () => {
    setSearchAnchorEl(null);
  };

  const handleAccountPopoverClose = () => {
    setAccountAnchorEl(null);
  };

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
          <IconButton
            className={classes.iconButton}
            onClick={handleAccountClick}
            onClose={handleAccountPopoverClose}>
            <MdAccountCircle className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            onClick={handleSearchClick}
            onClose={handleSearchPopoverClose}>
            <GoSearch className={classes.icon} />
          </IconButton>

          <IconButton
            aria-owns={cartPopoverOpen ? 'cart-popover-id' : undefined}
            aria-haspopup='true'
            className={classes.iconButton}
            onMouseEnter={handleCartHover}
            onMouseLeave={handleCartPopoverClose}
            onClick={handleCartClick}

            // onMouseLeave={handleCartPopoverClose}
          >
            {numOfItems > 0 && (
              <div className={classes.cartNumber}>
                <p>{numOfItems}</p>
              </div>
            )}
            <MdShoppingCart className={classes.icon} />
          </IconButton>
        </div>
      </Toolbar>
      <Popover
        id='search-popover-id'
        open={searchPopoverOpen}
        anchorEl={searchAnchorEl}
        onClose={handleSearchPopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <div className='flex items-center justify-center'>
          <Search />
        </div>
      </Popover>
      <Popover
        className={classes.popover}
        id='cart-popover-id'
        open={cartPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleCartPopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        disableRestoreFocus>
        <div className='flex items-center justify-center'>
          <CartPreview />
        </div>
      </Popover>
      <Popover
        id='account-popover-id'
        open={accountPopoverOpen}
        anchorEl={accountAnchorEl}
        onClose={handleAccountPopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        disableRestoreFocus>
        <div className='flex items-center justify-center'>
          <Account />
        </div>
      </Popover>
    </AppBar>
  );
};

export default NavBar;
