import User from '../models/user';


// lean gives json instead of mongo docobject
export const userIndex = (req, res, next) => (
  User.find().lean().exec((err, users) => {
    return (
      res.json({ users })
    );
  })
);
