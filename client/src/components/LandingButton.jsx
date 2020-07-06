import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    padding: '15px 50px',
    margin: 0,
  },
});

const LandingButton = ({ children, color }) => {
  const classes = useStyles();
  return (
    <Button variant='contained' color={color} className={classes.root}>
      {children}
    </Button>
  );
};

export default LandingButton;
