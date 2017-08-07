import User from '../models/user';


// lean gives json instead of mongo docobject
export const userIndex = (req, res, next) => (
  User.find().lean().exec((err, users) => {
    return (
      res.json({ users })
    );
  })
);

export const register = (req, res, next) => (
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => (
    err ? res.status(400).send({error: "Email address in use"}) : res.status(200).send({user:user.id})
  ))
)
