import merge from 'lodash/merge';
import { RECEIVE_INVENTORY, RECEIVE_ERRORS } from '../actions/inventory_actions';

const InventoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INVENTORY:
      return Object.assign(action.inventory);
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors };
      return merge({}, state, errors);
    default:
      return state;
  }
};

export default InventoryReducer;
