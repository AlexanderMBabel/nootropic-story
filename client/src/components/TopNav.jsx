import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      <Link to='/Shop/longevity'>
        <Button className={classes.link}>Life Extension</Button>
      </Link>
      <Link to='/Shop/cognitive'>
        <Button className={classes.link}>Cognitive</Button>
      </Link>
      <Link to='/Shop/mood'>
        <Button className={classes.link}>Mood</Button>
      </Link>
      <Link to='/Shop/essential'>
        <Button className={classes.link}>Essential</Button>
      </Link>
    </div>
  );
};

export default TopNav;
