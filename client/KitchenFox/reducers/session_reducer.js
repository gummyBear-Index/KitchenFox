import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const initialState = {
  currentUser: null,
  token: {},
  errors: {},
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, action.currentUser);
      return newState;
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors };
      newState = merge({}, state, errors);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
