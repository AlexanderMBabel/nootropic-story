import React, { useContext, useState } from 'react';
import { AppContext } from '../context/app.context';
import AccountList from './AccountList';
import { Button } from '@material-ui/core';
import { makeStyles, Modal } from '@material-ui/core/';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const styles = makeStyles((theme) => ({
  button: {
    '&:focus': {
      outline: 'none',
    },
  },
}));

const Account = () => {
  const { state } = useContext(AppContext);
  const { isLoggedIn } = state;
  const classes = styles();
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSignupClose = () => {
    setSignUpOpen(false);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignupOpen = () => {
    setSignUpOpen(true);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };
  return (
    <div>
      {isLoggedIn ? (
        <AccountList />
      ) : (
        <div className='flex justify-between w-full'>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={handleLoginOpen}>
            Log In
          </Button>
          <Button
            variant='contained'
            color='default'
            className={classes.button}
            onClick={handleSignupOpen}>
            Sign Up
          </Button>
        </div>
      )}
      <Modal
        open={signUpOpen}
        onClose={handleSignupClose}
        aria-labeledby='signup-title'
        aria-describedby='signup-description'>
        <SignUpForm />
      </Modal>
      <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labeledby='signup-title'
        aria-describedby='signup-description'>
        <LoginForm />
      </Modal>
    </div>
  );
};

export default Account;
