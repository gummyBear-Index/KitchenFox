import mongoose from 'mongoose';
import User from '../models/user';


const users = [
  {
    username: 'Jerry',
  },
  {
    username: 'Graham',
  },
];

mongoose.connect('mongodb://localhost/users');

users.map((data) => {
  const user = new User(data);
  user.save();
});
