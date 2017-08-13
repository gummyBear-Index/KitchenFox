import mongoose from '../db/database';
import User from '../models/user';

const populate = () => {
  const currentUsers =  User.find().lean().distinct('_id');

  const inventory = {
    'A123948172348': {
      'name': 'Tomato',
      'quantity': 11,
      'units': 'each',
    },
    9348798375: {
      'name': 'Chicken',
      'quantity': 400,
      'units': 'g',
    },
    183249187: {
      'name': 'Linguine',
      'quantity': 1400,
      'units': 'g',
    },
  };
  const users = [
    {
      username: 'graham',
      password: 'graham',
      first_name: 'Graham',
      last_name: 'Paye',
      inventory,
    },
    {
      username: 'hiro',
      password: 'hiro',
      first_name: 'Hiro',
      last_name: 'Obara',
      inventory,
    },
    {
      username: 'cherry',
      password: 'cherry',
      first_name: 'Cherry',
      last_name: 'Lam',
      inventory,
    },
    {
      username: 'kevin',
      password: 'kevin',
      first_name: 'Kevin',
      last_name: 'Yang',
      inventory,
    },
    {
      username: 'Fox',
      password: 'foxfox',
      first_name: 'Cooking',
      last_name: 'Fox',
      inventory,
    },
  ];

  const addSeed = () => (users.map(user => User.register(new User({
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    inventory: Object.assign(user.inventory),
  }), user.password, (err, user) => (
    err ? console.log(err) : console.log('success')
  ))));

  User.remove(addSeed);

  // console.log(User.all());
};

// export const register = (req, res, next) => {
//   User.register(new User({
//     username: req.body.username,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//   }), req.body.password, (err, user) => {
//     if (err) {
//       return res.status(401).json({ error: 'Email address in use' });
//     }
//     return res
//       .status(200)
//       .json(getToken(user));
//   });
// };


export default populate;
