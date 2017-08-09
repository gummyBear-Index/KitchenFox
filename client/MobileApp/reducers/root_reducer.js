import { combineReducers } from 'redux';

const appReducer = combineReducers({
  session: sessionReducer,
});

const rootReducer = (state, action) => {
  action.type === 'LOGOUT' ? state = undefined : appReducer(state, action);
};

export default rootReducer;
