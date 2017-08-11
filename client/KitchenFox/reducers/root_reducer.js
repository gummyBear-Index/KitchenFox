import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import InventoryReducer from './inventory_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
  inventory: InventoryReducer,
});

const RootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default RootReducer;
