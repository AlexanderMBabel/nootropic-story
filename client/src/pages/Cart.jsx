import React, { useContext, useState, useEffect, useCallback } from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from '../reducers/types';
import { Link } from 'react-router-dom';

import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  Button,
  InputLabel,
} from '@material-ui/core';
import { AppContext } from '../context/app.context';
import { styles } from '../styles/cart.styles';

const Cart = () => {
  const classes = styles();
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const [subtotal, setSubtotal] = useState();
  const [shipping, setShipping] = useState();
  const [tax, setTax] = useState();
  const [total, setTotal] = useState();
  const [zip, setZip] = useState('');
  const getSubTotal = useCallback(() => {
    let subtotal = cart.reduce((acc, next) => acc + Number(next.price), 0);
    return subtotal.toFixed(2);
  }, [cart]);
  const getTax = useCallback(() => {
    let subTotal = getSubTotal();
    return (subTotal * 0.06).toFixed(2);
  }, [getSubTotal]);
  const getShipping = () => {
    return '5.99';
  };
  const getTotal = useCallback(() => {
    let subtotal = Number(getSubTotal());
    let tax = Number(getTax());
    let shipping = Number(getShipping());
    return (subtotal + tax + shipping).toFixed(2);
  }, [getSubTotal, getTax]);

  useEffect(() => {
    setSubtotal(getSubTotal());
    setShipping(getShipping());
    setTax(getTax());
    setTotal(getTotal());
  }, [cart, getSubTotal, getTotal, getTax]);

  useEffect(() => {
    fetch(process.env.REACT_APP_GEO_API)
      .then((res) => res.json())
      .then((res) => setZip(res.zipcode));
  }, []);
  const handleQuantityChange = (e) => {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: {
        name: e.target.name,
        quantity: e.target.value,
      },
    });
  };
  const handleRemoveItem = (e) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: e.target.name,
    });
  };

  return (
    <div className={classes.container}>
      {cart.length < 1 ? (
        <Paper elevation={2} className={classes.paperEmpty}>
          <p>Your cart is empty</p>
          <Link to='/'>
            <Button variant='text'>Continue Shopping</Button>
          </Link>
        </Paper>
      ) : (
        <Paper elevation={2} className={classes.paper}>
          <div>My Cart</div>
          <List className={classes.list}>
            {cart.map((c) => (
              <div key={c.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar} src={c.image}></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={c.name} secondary={c.size} />
                  <div className={classes.prices}>
                    <div>
                      <p>$ {(c.price * c.quantity).toFixed(2)}</p>
                      {/* {c.stack && <p>{c.stack}</p>} */}
                    </div>

                    <FormControl variant='outlined' className={classes.select}>
                      <InputLabel id='quantity-label'>Quantity</InputLabel>
                      <Select
                        labelId='quantity-label'
                        value={c.quantity}
                        name={c.name}
                        label='Quantity'
                        onChange={handleQuantityChange}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      name={c.name}
                      onClick={handleRemoveItem}>
                      <FaTrashAlt className={classes.trash} />
                      <span>Remove</span>
                    </Button>
                  </div>
                </ListItem>
                <Divider className={classes.divider} />
              </div>
            ))}
          </List>
          <Paper elevation={3} className={classes.totals}>
            <div className='flex items-center justify-between'>
              <p className='text-gray-600'>Item Subtotal:</p>
              <p>${subtotal}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-gray-600'>Shipping:{zip}</p>
              <p>$ {shipping}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-gray-600'>Estimated Tax:</p>
              <p>$ {tax}</p>
            </div>
            <Divider />
            <div className='flex items-center justify-between'>
              <p className='text-gray-800 font-semibold'>Total:</p>
              <p className='text-gray-800 font-semibold'>$ {total}</p>
            </div>
            <Button
              variant='contained'
              color='secondary'
              className={classes.checkOutBtn}>
              <MdPayment />
              <span>Check Out</span>
            </Button>
          </Paper>
        </Paper>
      )}
    </div>
  );
};

export default Cart;
