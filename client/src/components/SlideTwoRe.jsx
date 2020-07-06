import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LandingButton from './LandingButton';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90vw',
    height: '80vh',

    backgroundColor: 'white',
    margin: 0,
  },
  slide: {
    backgroundImage: 'url(guide.svg)',
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
  blurb: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#333333',
    width: '50%',

    alignSelf: 'flex-start',
    paddingTop: 50,
    '& h1': {
      fontFamily: 'Galada',
      fontSize: '3rem',
      color: theme.palette.secondary.dark,
      letterSpacing: 5,
    },
    '& p': {
      fontSize: '2rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      padding: 0,
      //   width: '50%',
    },

    blurb: {
      alignSelf: 'center',
      fontSize: '1rem',
      paddingTop: 50,

      display: 'none',
    },
  },
}));
const SlideTwoRe = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.slide}>
        <div className={classes.blurb}>
          <h1>Make Informed Purchases</h1>
          <p className='text-gray-700'>
            We've put together indepth guides to help you choose the right
            supplement for you
          </p>
        </div>
        <LandingButton color='secondary'>View Guides</LandingButton>
      </div>
    </div>
  );
};

export default SlideTwoRe;
