import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.dark,
    display: 'flex',
    paddingLeft: 20,
  },
  link: {
    padding: '0 5px',
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));

const TopNav = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${className}`}>
      <p className={classes.link}>Life Extension</p>
      <p className={classes.link}>Cognative</p>
      <p className={classes.link}>Mood</p>
      <p className={classes.link}>Essiential</p>
    </div>
  );
};

export default TopNav;
