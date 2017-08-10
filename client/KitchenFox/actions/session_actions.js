import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT = 'LOGOUT';

// TODO: Have checkLogin ping server to ensure token is valid
// export const checkLogin = () => dispatch => (
//   APIUtil.getLocalToken().then(token => dispatch(receiveToken(token)))
//     // .error(error => receiveErrors(error))
// );

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const deleteSession = () => ({
  type: LOGOUT,
});

export const logout = () => dispatch => (
  APIUtil.deleteLocalToken()
    .then(() => dispatch(deleteSession()))
);

export const receiveSignin = response => (dispatch) => {
  const parsedResponse = JSON.parse(response._bodyText);
  APIUtil.saveToken(parsedResponse.token)
    .then(() => dispatch(receiveCurrentUser(parsedResponse)));
};

export const signin = state => dispatch => (
  APIUtil.login(state.username, state.password)
    .then((response) => {
      dispatch(receiveSignin(response));
    })
);

export const fetchToken = () => (dispatch) => {
  APIUtil.getLocalToken().then((token) => {
    const sessionToken = {
      token,
    };
    dispatch(receiveCurrentUser(sessionToken));
  });
};


export const receiveSignup = response => (dispatch) => {
  const parsedResponse = JSON.parse(response._bodyText);
  // console.warn(JSON.stringify(parsedResponse));
  APIUtil.saveFirstName(parsedResponse.first_name);
  APIUtil.saveLastName(parsedResponse.last_name);
  APIUtil.saveToken(parsedResponse.token)
  .then(() => dispatch(receiveCurrentUser(parsedResponse)));
};
export const signup = state => dispatch => {
  // console.warn(JSON.stringify(state));
  APIUtil.signup(state.first_name, state.last_name, state.username, state.password)
    .then((response) => {
      // console.warn(JSON.stringify(response)),
      dispatch(receiveSignup(response));
    });
};

export const fetchFirstName = () => (dispatch) => {
  APIUtil.getFirstName().then((fn) => {
    const firstName = {
      fn,
    };
    dispatch(receiveCurrentUser(firstName));
  });
};

export const fetchLastName = () => (dispatch) => {
  APIUtil.getFirstName().then((fn) => {
    const lastName = {
      fn,
    };
    dispatch(receiveCurrentUser(lastName));
  });
};
