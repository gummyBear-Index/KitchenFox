import express from 'express';
import { userIndex } from './api/controllers/users';

// Initialize http server
const app = express();

// Handle / route
app.get('/', (req, res) =>
  res.send('Hello World!')
);

app.get('/users', (req, res) =>
  res.send(userIndex())
);

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
