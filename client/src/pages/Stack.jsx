import React from 'react';

import { Paper, Button, Card, CardContent } from '@material-ui/core';
import { styles } from '../styles/stack.style';

import { Link } from 'react-router-dom';

const cardData = [
  {
    title: 'Choose up to six supplements',
  },
  {
    title: 'Choose your amount',
    subtitle: 'Within recommended dosages',
  },
  { title: 'Save your stack', subtitle: 'check out other users stacks' },
  { title: "we'll cap and bottle your stack" },
];

const Stack = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <h1>Create a personalized stack</h1>
      <Paper elevation={4} className={classes.paper}>
        <div className='flex items-center justify-between'>
          {cardData.map((cInfo) => (
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <h3>{cInfo.title}</h3>
                {cInfo.subtitle && <p>{cInfo.subtitle}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
        <Link to='/Stack/create'>
          <Button variant='outlined' color='primary' size='large'>
            Get Started
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

export default Stack;
