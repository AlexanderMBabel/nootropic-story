import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 40,
    width: 40,
  },
  companyName: {
    fontSize: '1.8rem',
    paddingLeft: 5,
    fontWeight: 600,
    color: theme.palette.secondary.main,
    letterSpacing: 0.2,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className='flex items-center justify-center '>
      <img src='tree.png' alt='logo' className={classes.logo} />
      <p className={classes.companyName}>NEWME</p>
    </div>
  );
};

export default Logo;
