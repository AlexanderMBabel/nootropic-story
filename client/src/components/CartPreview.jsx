import React, { useContext } from 'react';
import { AppContext } from '../context/app.context';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import CartItem from './CartItem';

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: '400px',
    padding: 10,
  },
}));

const CartPreview = () => {
  const classes = useStyles();
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className={classes.container}>
      {cart.length < 1 ? (
        <div>Cart is empty</div>
      ) : (
        <List>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </List>
      )}
    </div>
  );
};

export default CartPreview;
