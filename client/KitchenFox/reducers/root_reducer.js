import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import InventoryReducer from './inventory_reducer';
import CartReducer from './cart_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
  inventory: InventoryReducer,
  cart: CartReducer,
});

const RootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default RootReducer;
