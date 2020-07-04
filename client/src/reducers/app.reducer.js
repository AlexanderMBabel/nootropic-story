import { TOGGLE_DRAWER } from './types';

export function appReducer(state, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, drawerIsOpen: !state.drawerIsOpen };
    default:
      return state;
  }
}
