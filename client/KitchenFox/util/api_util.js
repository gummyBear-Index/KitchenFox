import { AsyncStorage } from 'react-native';
// const baseURL = 'http://localhost:3000/api/';
const baseURL = 'https://kitchenfox.herokuapp.com/api/';

const objectToQueryString = (obj, prefix) => {
  const queryString = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? `${prefix}[${p}]` : p, v = obj[p];
      queryString.push((v !== null && typeof v === 'object') ?
        objectToQueryString(v, k) :
        `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
    }
  }
  console.warn(queryString.join('&'));
  return queryString.join('&');
};

export const signup = (state) => {
  const body = objectToQueryString(state);
  return fetch(`${baseURL}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
    body: `${body}`,
  });
};

export const login = (state) => {
  const body = objectToQueryString(state);
  return fetch(`${baseURL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
    body: `${body}`,
  });
};

export const fetchItems = token => (
  fetch(`${baseURL}items`, {
    method: 'GET',
    headers: {
      authorization: `JWT ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
  })
);

export const fetchUser = state => {
  const token = state.session.token;
  fetch(`${baseURL}user`, {
    method: 'GET',
    headers: {
      authorization: `JWT ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
  });
};

export const patchItems = (token, state) => {
  return fetch(`${baseURL}items`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
      authorization: `JWT ${token}`,
    },
    body: `${objectToQueryString(state)}`,
  });
};

export const upcLookUp = (code, token) => {
  fetch(`${baseURL}upcLookUp`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `JWT ${token}`,
      'upc_code': code,
      charset: 'UTF-8',
    },
  });
};

export const deleteLocalData = () => (
  AsyncStorage.removeItem('user')
);

export const setLocalUserData = user => (
  AsyncStorage.setItem('user', user)
);

export const getLocalUserData = user => (
  AsyncStorage.getItem('user')
);
