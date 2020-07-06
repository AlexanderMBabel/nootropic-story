import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    padding: '15px 50px',
    marginTop: 50,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      fontSize: '0.8rem',
    },
  },
}));

const LandingButton = ({ children, color }) => {
  const classes = useStyles();
  return (
    <Button variant='contained' color={color} className={classes.root}>
      {children}
    </Button>
  );
};

export default LandingButton;
