import {
  TOGGLE_DRAWER,
  TOGGLE_LOADING,
  ADD_ALERT,
  CLEAR_ALERTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from './types';

export function appReducer(state, action) {
  let tempCart, index;
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, drawerIsOpen: !state.drawerIsOpen };
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case ADD_ALERT:
      return { ...state, alerts: [...state.alerts, action.payload] };
    case CLEAR_ALERTS:
      return { ...state, alerts: [] };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      tempCart = state.cart;
      index = tempCart.findIndex((cart) => cart.name === action.payload);
      tempCart.splice(index, 1);
      return { ...state, cart: tempCart };
    case UPDATE_CART_QUANTITY:
      tempCart = state.cart;
      index = tempCart.findIndex((cart) => cart.name === action.payload.name);
      tempCart[index].quantity = action.payload.quantity;
      return { ...state, cart: tempCart };

    default:
      return state;
  }
}
