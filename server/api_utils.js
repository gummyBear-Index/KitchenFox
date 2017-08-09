import { AsyncStorage } from 'react-native';


export const createUser = (username, password) => (
  fetch("https://kitchenfox.herokuapp.com/api/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}&password=${password}`,
  })
);

export const login = (username, password) => (
  fetch("https://kitchenfox.herokuapp.com/api/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-8',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
);

export const saveToken = token => (
  await AsyncStorage.setItem('jwt', token);
)

export const getLocalToken = () => (
  await AsyncStorage.getItem('jwt');
)

export const demoSecured = (route) => {
  const token = getLocalToken();
  return (
    fetch('https://kitchenfox.herokuapp.com/api/${route}', {
      method: 'GET',
      headers: {
        authorization: `JWT ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        charset: 'UTF-8',
      },
    })
  );
}

export const securable = token => (
  fetch("https://kitchenfox.herokuapp.com/api/protected", {
    method: "GET",
    headers: {
      authorization: `JWT ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-8',
    },
  })
);

export const protectedHeaders = () => (
  fetch("https://kitchenfox.herokuapp.com/api/protected", {
    method: "GET",
    headers: {
      authorization: `JWT ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-8',
    },
  })
);
