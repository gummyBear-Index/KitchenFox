import merge from 'lodash/merge';

import { RECEIVE_CART, RECEIVE_ERRORS, CLEAR_CART } from '../actions/inventory_actions';

const CartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART:
      return merge({}, state, action.cart);
    case CLEAR_CART:
      return Object.assign({});
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors };
      return merge({}, state, errors);
    default:
      return state;
  }
};

export default CartReducer;
