import { AsyncStorage } from 'react-native';

export const createUser = (username, password) => (
  fetch("https://kitchenfox.herokuapp.com/api/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
    body: `username=${username}&password=${password}`,
  })
);

export const login = (username, password) => (
  fetch("https://kitchenfox.herokuapp.com/api/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
    body: `username=${username}&password=${password}`,
  })
);

export const saveToken = (response) => (
  AsyncStorage.setItem('jwt', response._bodyText);
);

export const getLocalToken = () => (
  AsyncStorage.getItem('jwt')
);

export const demoSecured = () => {
  const token = getLocalToken();
  return (
    fetch('https://kitchenfox.herokuapp.com/api/protected', {
      method: 'GET',
      headers: {
        authorization: `JWT ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        charset: 'UTF-16',
      },
    })
  );
};

export const securable = token => (
  fetch("https://kitchenfox.herokuapp.com/api/protected", {
    method: "GET",
    headers: {
      authorization: `JWT ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
  })
);

export const protectedHeaders = () => (
  fetch("https://kitchenfox.herokuapp.com/api/protected", {
    method: "GET",
    headers: {
      authorization: `JWT ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-16',
    },
  })
);
