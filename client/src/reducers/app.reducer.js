import {
  TOGGLE_DRAWER,
  TOGGLE_LOADING,
  ADD_ALERT,
  CLEAR_ALERTS,
} from './types';

export function appReducer(state, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, drawerIsOpen: !state.drawerIsOpen };
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case ADD_ALERT:
      return { ...state, alerts: [...state.alerts, action.payload] };
    case CLEAR_ALERTS:
      return { ...state, alerts: [] };
    default:
      return state;
  }
}
