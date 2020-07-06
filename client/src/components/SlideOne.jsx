import React from 'react';

import LandingButton from './LandingButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landing: {
    width: '95vw',
    height: '88vh',
    backgroundImage: 'url(analyze.svg)',
    backgroundRepeat: 'no-repeat',
  },
  best: {
    paddingBottom: 50,
    fontFamily: 'Poppins',
    fontSize: '2rem',
    letterSpacing: '5px',
    color: theme.palette.secondary.dark,
  },
  [theme.breakpoints.up('xs')]: {
    landing: {
      backgroundSize: 'fit',
    },
    best: {
      display: 'none',
    },
  },

  [theme.breakpoints.up('md')]: {
    landing: {
      backgroundSize: '80%',
    },
    best: {
      display: 'block',
    },
  },
  [theme.breakpoints.up('lg')]: {
    landing: {
      backgroundSize: '65%',
    },
  },
  [theme.breakpoints.up('xl')]: {},
}));
const SlideOne = () => {
  const classes = useStyles();
  return (
    <div>
      <div
        className={`rounded shadow flex items-center justify-evenly ${classes.landing}  `}>
        <div className={classes.blurb}>
          <p>Indepently tested</p>
          <p>purity garenteed</p>
          <p></p>
        </div>
        <h4 className={`self-end ${classes.best}`}>
          cognative potential optimization
        </h4>
        <LandingButton>Shop Now</LandingButton>
      </div>
    </div>
  );
};

export default SlideOne;
