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

export const signin = state => dispatch => (
  APIUtil.login(state.username, state.password)
    .then(response => {
      console.warn(JSON.stringify(response));
      saveToken(response).then(() => {
        dispatch(receiveToken);
          // const v = AsyncStorage.getItem('jwt');
          // if (v !== null) {
            // co/nsole.warn(JSON.stringify(v));
          // }
        // console.warn(JSON.stringify(AsyncStorage.getItem('jwt'))
      }
    );
    })
);

export const receiveSignin = response => dispatch => {
  APIUtil.saveToken(response).then(() => dispatch(receiveCurrentUser(response._bodyText)));
};

export const fetchToken = () => (dispatch) => {
  APIUtil.getLocalToken().then((token) => {
    const sessionToken = { token, };
    dispatch(receiveCurrentUser(sessionToken));
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
