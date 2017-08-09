import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

export const checkLogin = () => dispatch => (
  APIUtil.getLocalToken().then(token => dispatch(receiveToken(token)))
    // .error(error => receiveErrors(error))
);

export const getLocalToken = () => (
  AsyncStorage.getItem('jwt')
);

export const saveToken = (response) => (
  AsyncStorage.setItem('jwt', response._bodyText)
);

export const signin = state => dispatch => (
  APIUtil.login(state.username, state.password)
    .then(response => {
      console.warn(JSON.stringify(response));
      saveToken(response).then(() => dispatch(receiveToken));
    })

);

export const receiveToken = token => ({
  type: RECEIVE_TOKEN,
  token,
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
  errors
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
