import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
// import { LocalStrategy } from 'passport-local';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';

import User from './api/models/user';

import mongoose from './api/db/database';
import { secret } from './config';
import router from './api/routes';

// Initialize http server
const app = express();


let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeader();
options.secretOrKey = secret;

app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

passport.use('local', new LocalStrategy(User.authenticate()));
passport.use('jwt', new JwtStrategy(options, (jwt_payload, done) => {
  User.findOne({
    _id: jwt_payload.id
  }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}));

// Handle / route

app.use(morgan('combined'));
app.use('/api', router);


const portNum = process.env.PORT || 3000;

// Launch the server on port 3000
const server = app.listen(portNum, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
