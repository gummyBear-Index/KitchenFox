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

mongoose.connect('mongodb://localhost/kitchenFox');

users.map((data) => {
  const user = new User(data);
  user.save();
});
