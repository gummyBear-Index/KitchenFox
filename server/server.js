import express from 'express';
import { userIndex } from './api/controllers/users';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './api/routes';

// Initialize http server
const app = express();

// Handle / route

app.use(morgan('combined'));
app.use('/api', router);


// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
