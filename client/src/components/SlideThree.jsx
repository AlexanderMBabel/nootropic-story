import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LandingButton from './LandingButton';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90vw',
    height: '80vh',

    backgroundColor: 'white',
    margin: 0,
  },
  slide: {
    backgroundColor: '#ffffff',
    backgroundImage: `url(shop.svg)`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 10,
    boxShadow: '0 2px 5px rgba(44, 44, 44, 0.7)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 0,
    padding: 10,
  },
}));
const SlideThree = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.slide}>
        <LandingButton color='primary'>Shop Now</LandingButton>
      </div>
    </div>
  );
};

export default SlideThree;
