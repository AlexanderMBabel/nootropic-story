import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { styles } from '../styles/stack.style';

const Guides = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <h1>Guides</h1>
      <Paper>
        <h3>Recommended External Guides</h3>
        <Button>Braintropic</Button>
        <Button>Nootropic Expert</Button>
        <Button>Nootropic Org</Button>
      </Paper>
    </div>
  );
};

export default Guides;
