import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
}) ;

const RootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
}

export default RootReducer;
