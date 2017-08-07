export const createUser = user => {
  fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: user,
  })
};
