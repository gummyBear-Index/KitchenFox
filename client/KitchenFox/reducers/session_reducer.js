import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';

const initialState = {
  first_name: '',
  last_name: '',
  token: {},
  errors: {},
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    // console.warn(JSON.stringify(action));
      newState = merge({}, state, action.currentUser);
      return newState;
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors };
      newState = merge({}, state, errors);
      return newState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default SessionReducer;
