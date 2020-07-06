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
    backgroundImage: `url(package.svg)`,
    // backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
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
  blurb: {
    fontSize: '3rem',
    alignSelf: 'flex-start',
    '& p ': {
      fontWeight: 200,
      fontSize: '1.3rem',
      letterSpacing: 7,
    },
  },
  [theme.breakpoints.down('sm')]: {
    slide: {
      backgroundSize: 'cover',
    },
  },
  [theme.breakpoints.down('md')]: {
    slide: {
      backgroundPosition: '25% 75%',
    },
  },
}));
const SlideThree = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.slide}>
        <div className={classes.blurb}>
          <h1 className='text-gray-700'>Free Shipping</h1>
          <p className='text-gray-600'>on purchases over $60</p>
        </div>
        <LandingButton color='secondary'>Shop Now</LandingButton>
      </div>
    </div>
  );
};

export default SlideThree;
