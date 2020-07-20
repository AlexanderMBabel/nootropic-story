import React, { useState } from 'react';
import {
  Paper,
  TextField,
  makeStyles,
  FormControl,
  Button,
} from '@material-ui/core';

const styles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    width: '40%',
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
}));
const LoginForm = () => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Paper className={classes.paper}>
      <h1 className='self-center'>Login</h1>
      <FormControl>
        <TextField
          type='text'
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type='password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        size='large'
        className={classes.button}>
        Login
      </Button>
    </Paper>
  );
};

export default LoginForm;
