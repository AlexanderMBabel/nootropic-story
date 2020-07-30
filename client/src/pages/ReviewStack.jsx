import React, { useContext, useState, useEffect } from 'react';

import {
  Paper,
  ListItem,
  List,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from '@material-ui/core';
import { AppContext } from '../context/app.context';

import { ADD_TO_CART, ADD_ALERT } from '../reducers/types';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { styles } from '../styles/stack.style';
import { Link } from 'react-router-dom';

const pillsInBottle = [30, 45, 60, 80, 100, 120, 150, 200, 300, 400, 500];

const ReviewStack = () => {
  const classes = styles();
  const { state, dispatch } = useContext(AppContext);
  const { stack } = state;
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(30);
  const [stackState, setStackState] = useState(stack);
  const [stackLength, setStackLength] = useState();
  const [price, setPrice] = useState();
  const addToCart = () => {
    if (name === '') {
      dispatch({ type: ADD_ALERT, payload: 'Must Name Your Stack' });
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: { name, stack, quantity: 1, price },
      });
    }
  };

  const handleRemove = (supplement) => {
    let tempStackState = stackState;

    let index = tempStackState.findIndex(
      (item) => item.supplement === supplement
    );

    tempStackState.splice(index, 1);

    setStackState(tempStackState);
    setStackLength(tempStackState.length);
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_PRODUCT_DB + 'get_stack_price', {
        params: {
          stack,
        },
      })
      .then((res) => {
        setPrice((res.data.price * amount).toFixed(2));
      })
      .catch((err) => console.log(err));
  }, [amount, stack]);

  return (
    <div className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <h1>Review Stack</h1>
        <FormControl className={classes.formGroup}>
          <TextField
            id='stack-name'
            label='name your stack'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl className={classes.formControlSelect}>
          <InputLabel id='amount-label'>Amount of doses</InputLabel>
          <Select
            label='Amount of pills'
            labelId='amount-label'
            className={classes.select}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}>
            {pillsInBottle.map((pills) => (
              <MenuItem key={pills} value={pills}>
                {pills}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <p>
            Price: <span>{price}</span>
          </p>
        </div>
        <div>
          {stackState.map((stackItem) => (
            <List>
              <ListItem key={stackItem.supplement} className={classes.listItem}>
                <p>{stackItem.supplement}</p>
                <p className={classes.span}> {stackItem.amount} mg</p>
                <FaTrashAlt
                  className='text-gray-800 hover:text-red-600'
                  onClick={() => handleRemove(stackItem.supplement)}
                  name={stackItem.supplement}
                />
              </ListItem>
            </List>
          ))}

          <div id='buttons' className={classes.buttons}>
            <Link to='/Stack/create'>
              <Button size='medium' color='secondary' variant='outlined'>
                ReBuild
              </Button>
            </Link>

            <Button
              size='medium'
              color='secondary'
              variant='contained'
              onClick={addToCart}
              className={classes.cartButton}>
              Add To Cart
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ReviewStack;
