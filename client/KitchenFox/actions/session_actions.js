import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT = 'LOGOUT';

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
  APIUtil.deleteLocalData()
    .then(() => dispatch(deleteSession()))
);

export const signin = state => dispatch => (
  APIUtil.login(state.username, state.password)
    .then((response) => {
      dispatch(receiveSignin(response));
    })
);

export const signup = state => dispatch => {
  APIUtil.signup(state)
    .then((response) => {
      dispatch(receiveSignup(response));
    });
};

export const receiveSignin = response => (dispatch) => {
  const parsedResponse = JSON.parse(response._bodyText);
  APIUtil.saveToken(parsedResponse.token)
    .then(() => dispatch(receiveCurrentUser(parsedResponse)));
};

export const receiveSignup = response => (dispatch) => {
  const parsedResponse = JSON.parse(response._bodyText);
  APIUtil.setLocalUserData(response._bodyText)
  .then(() => dispatch(receiveCurrentUser(parsedResponse)));
};

export const loadLocalUser = () => dispatch => (
  APIUtil.getLocalUserData().then(user => {
    const parsedData = JSON.parse(user);
    dispatch(receiveCurrentUser(parsedData));
  })
);

export const saveUserData = session => (dispatch) => {
  const stringifiedData = JSON.stringify(session);
  APIUtil.setLocalUserData(stringifiedData)
    .error(error => receiveErrors(error));
};

// export const verifyUser = token => dispatch => (
//   APIUtil.fetchUser(token)
//     .then(response => dispatch(receiveCurrentUser(JSON.parse(response._bodyText))))
// );
