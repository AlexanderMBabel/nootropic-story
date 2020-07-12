import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaTrashAlt } from 'react-icons/fa';
import { UPDATE_CART_QUANTITY } from '../reducers/types';
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
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paper: {
    padding: 20,
  },
  avatar: {
    width: '200px',
    height: '200px',
    marginRight: 30,
  },
  prices: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& p': {
      fontSize: '2rem',
    },
  },
  select: {
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  trash: {
    marginRight: 5,
  },
  divider: {
    width: '100%',
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const handleQuantityChange = (e) => {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: {
        name: e.target.name,
        quantity: e.target.value,
      },
    });
  };
  const getSubTotal = () => {};
  return (
    <div className={classes.container}>
      <Paper elevation={2} className={classes.paper}>
        <div>My Cart</div>
        <List className={classes.list}>
          {cart.map((c) => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar} src={c.image}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={c.name} secondary={c.size} />
                <div className={classes.prices}>
                  <p>$ {(c.price * c.quantity).toFixed(2)}</p>

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
                  <Button variant='contained' color='primary' size='small'>
                    <FaTrashAlt className={classes.trash} />
                    <span>Remove</span>
                  </Button>
                </div>
              </ListItem>
              <Divider className={classes.divider} />
            </>
          ))}
        </List>
        <Paper elevation={3}></Paper>
      </Paper>
    </div>
  );
};

export default Cart;
