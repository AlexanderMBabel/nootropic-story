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
    backgroundColor: '#ffffff',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%232b92ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%235389f7' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%236c80ed' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%237e76e2' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%238d6dd6' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%239963c9' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23a259bb' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23a94fac' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23ad459d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23b03c8e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23b1337e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23b02a6f' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23ae2360' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23aa1d51' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23a51943' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%239f1835' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23971928' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%238f1b1b' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: 'fixed',
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
    justifyContent: 'space-around',

    width: '33%',
    height: '40vh',
    alignSelf: 'center',
    fontSize: '3rem',
    color: 'white',

    '& h1': {
      // fontFamily: 'Galada',
      fontWeight: 'semibold',
      fontSize: '3.5rem',
    },
    '& p ': {
      fontSize: '1.5rem',
    },
  },
  blurb2: {
    alignSelf: 'flex-start',
    width: '33%',
  },
  svg: {
    width: '53%',
    height: '90%',
  },
  [theme.breakpoints.down('sm')]: {
    slide: {
      flexDirection: 'column',
    },
    blurb: {
      '& h1': {
        display: 'none',
      },
      '& p': {
        display: 'none',
      },
      '& .expert': {
        fontSize: '1.2rem',
        display: 'block',
      },
    },
    blurb2: {
      display: 'none',
    },
    svg: {
      display: 'none',
    },
  },
  [theme.breakpoints.down('md')]: {
    blurb: {
      '& h1': {
        fontSize: '2rem',
      },
      '& p': {
        fontSize: '1.5rem',
      },
      '& .expert': {
        fontSize: '1.2rem',
        display: 'block',
      },
    },
  },
}));
const SlideOneRe = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.slide}>
        <div className={classes.blurb}>
          <h1 className='text-gray-800 tracking-tighter'>Personalized Stack</h1>

          <p className='expert'>
            Our experts will put together a stack to your exact specifications
          </p>
          <p className='text-gray-800'>
            No more unwanted ingredients or spendings time measuring and caping
            your own stacks
          </p>
          <LandingButton className='mt-6' color='primary'>
            Create Stack
          </LandingButton>
        </div>

        <img src='analyze.svg' alt='expert' className={classes.svg} />
      </div>
    </div>
  );
};

export default SlideOneRe;
