import React, { useState, useContext } from 'react';
import {
  Paper,
  TextField,
  makeStyles,
  FormControl,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import { AppContext } from '../context/app.context';
import { MoonLoader } from 'react-spinners';
import { ADD_ALERT, TOGGLE_LOGGEDIN } from '../reducers/types';

const styles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),

    justifyContent: 'center',
    '& h1': {
      fontSize: '1.5rem',
    },
  },
  button: {
    marginTop: 30,
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
const LoginForm = ({ onClose }) => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const { isLoading } = state;
  const [loading, setLoading] = useState(isLoading);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get(process.env.REACT_APP_USERS + 'login', {
        params: { email, password },
      })
      .then((res) => {
        setLoading(true);
        console.log(res.data);
        localStorage.setItem('token', res.data);
        dispatch({ type: TOGGLE_LOGGEDIN });
        setTimeout(() => {
          setLoading(false);
          onClose();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_ALERT, payload: err.errors });
      });
  };
  return (
    <Paper className={classes.paper}>
      <h1 className='self-center'>Login</h1>
      {loading ? (
        <div>
          <MoonLoader size={60} color='teal' />
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <FormControl className={classes.formControl}>
            <TextField
              type='text'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
            />
            <TextField
              type='password'
              label='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='new-password'
            />
          </FormControl>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.button}>
            Login
          </Button>
        </form>
      )}
    </Paper>
  );
};

export default LoginForm;
