import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

export const checkLogin = () => dispatch => (
  APIUtil.getLocalToken().then(token => dispatch(receiveToken(token)))
    // .error(error => receiveErrors(error))
);

export const signin = state => dispatch => (
  APIUtil.login(state.username, state.password)
    .then(response => dispatch(receiveToken))
);

// export const checkLogin = () => dispatch => (
//   APIUtil.getLocalToken().then(token => this.props.setState({ currentUser: token }),
//   err => this.props.setState({ currentUser: null })
// ));

export const receiveToken = token => ({
  type: RECEIVE_TOKEN,
  token,
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
  errors,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
