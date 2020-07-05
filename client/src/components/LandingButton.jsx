import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    padding: '10px 50px',
  },
});

const LandingButton = ({ children }) => {
  const classes = useStyles();
  return (
    <Button variant='contained' color='primary' className={classes.root}>
      {children}
    </Button>
  );
};

export default LandingButton;
