import React, { useState, useContext, useEffect } from 'react';
import {
  Paper,
  makeStyles,
  Button,
  IconButton,
  Popover,
  List,
  ListItem,
} from '@material-ui/core';
import { AppContext } from '../context/app.context';
import { MoonLoader } from 'react-spinners';
import Axios from 'axios';
import { ADD_ALERT, TOGGLE_LOGGEDIN } from '../reducers/types';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import axios from 'axios';
const styles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    border: 'none',
    outline: 'none',

    justifyContent: 'center',
    '& h1': {
      fontSize: '1.5rem',
    },
  },
  button: {
    marginTop: 10,
    '&:focus': {
      outline: 'none',
    },
  },
  popover: {
    pointerEvents: 'none',
    padding: 0,
    maxWidth: 500,
  },
  list: {
    padding: 0,
    fontSize: '0.8rem',
    maxWidth: 250,
  },
  text: {
    marignTop: 10,
  },
}));
const SignUpForm = ({ onClose }) => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordVis, setPasswordVis] = useState(false);
  const [repeatPasswordVis, setRepeatPasswordVis] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  //   const { isLoading } = state;
  const [loading, setLoading] = useState('loaded');

  //   useEffect(() => {
  //     setLoading(isLoading);
  //   }, [isLoading]);

  useEffect(() => {
    ValidatorForm.addValidationRule('emailExist', async (value) => {
      const isEmailRes = await axios
        .get(process.env.REACT_APP_USERS + 'isemailexist', {
          params: { email },
        })
        .then((res) => res.data);

      return !isEmailRes.isEmail;
    });
    return () => {
      ValidatorForm.removeValidationRule('emailExist');
    };
  }, [email]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value === password) {
        console.log(password);
        return true;
      }
      return false;
    });
    ValidatorForm.addValidationRule('isStrongPassword', (value) => {
      return value.match(
        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
      );
    });
    return () => {
      ValidatorForm.removeValidationRule('isPasswordMatch');
      ValidatorForm.removeValidationRule('isStrongPasword');
    };
  }, [password]);

  const handleSignUp = () => {
    if (password === repeatPassword) {
      Axios.post(process.env.REACT_APP_USERS + 'signup', { email, password })
        .then((res) => {
          setLoading('loading');
          localStorage.setItem('token', res.data);
          dispatch({ type: TOGGLE_LOGGEDIN });
          setTimeout(() => {
            setLoading('success');
          }, [1000]);
          setTimeout(() => onClose(), 1000);
        })
        .catch((err) => {
          dispatch({ type: ADD_ALERT, payload: err.errors });
        });
    } else {
      dispatch({ type: ADD_ALERT, payload: 'Passwords Dont Match' });
    }
  };

  const togglePasswordVis = () => {
    setPasswordVis(!passwordVis);
  };

  const toggleRepeatPasswordVis = () => {
    setRepeatPasswordVis(!repeatPasswordVis);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Paper className={classes.paper}>
      <h1 className='self-center'>Sign Up</h1>
      {loading === 'loading' ? (
        <div>
          <MoonLoader size={70} color='teal' />
        </div>
      ) : loading === 'loaded' ? (
        <div className='flex flex-col'>
          <ValidatorForm
            className='flex flex-col'
            onSubmit={handleSignUp}
            onError={(error) => dispatch({ type: ADD_ALERT, payload: error })}>
            <TextValidator
              type='text'
              label='Email'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              validators={['required', 'isEmail', 'emailExist']}
              errorMessages={[
                'Email is required',
                'Must be a valid email',
                'Email already exists, sign in or choose differnt email',
              ]}
              variant='outlined'
              className={classes.text}
            />
            <div className='my-3'>
              <TextValidator
                className='w-full'
                autoComplete='off'
                type={passwordVis ? 'text' : 'password'}
                label='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validators={['isStrongPassword']}
                errorMessages={['not a strong password']}
                variant='outlined'
                InputProps={{
                  endAdornment: (
                    <div className='flex items-center'>
                      <IoIosInformationCircleOutline
                        className='text-teal-600 text-center text-xl'
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                      />
                      <IconButton
                        position='end'
                        onClick={togglePasswordVis}
                        className='focus:outline-none'>
                        {passwordVis ? <MdVisibility /> : <MdVisibilityOff />}
                      </IconButton>
                    </div>
                  ),
                }}
              />
            </div>

            <TextValidator
              type={repeatPasswordVis ? 'text' : 'password'}
              autoComplete='off'
              label='Repeat Password'
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              validators={['isPasswordMatch']}
              errorMessages={['passwords dont match']}
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <div className='flex items-center'>
                    <IconButton
                      position='end'
                      onClick={toggleRepeatPasswordVis}
                      className='focus:outline-none'>
                      {repeatPasswordVis ? (
                        <MdVisibility />
                      ) : (
                        <MdVisibilityOff />
                      )}
                    </IconButton>
                  </div>
                ),
              }}
            />
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.button}
              type='submit'>
              Sign Up
            </Button>
          </ValidatorForm>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          Successfully signed up!
        </div>
      )}
      <Popover
        id='password-popover'
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
        <div className=''>
          <List className={classes.list}>
            <ListItem>* must contain one special character(!#$%@&)</ListItem>
            <ListItem>* must contain atleast 2 uppercase characters</ListItem>
            <ListItem>* must contain atleast 3 lowercase characters</ListItem>
            <ListItem>* must contain atlesat 2 digits</ListItem>
            <ListItem>* must be atleast 8 characters long </ListItem>
          </List>
        </div>
      </Popover>
    </Paper>
  );
};

export default SignUpForm;
