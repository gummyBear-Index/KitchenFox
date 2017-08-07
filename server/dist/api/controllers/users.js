'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = exports.userIndex = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = '7x0jhxt&quot;9(thpX6';

// lean gives json instead of mongo docobject
var userIndex = exports.userIndex = function userIndex(req, res, next) {
  return _user2.default.find().lean().exec(function (err, users) {
    return res.json({ users: users });
  });
};

var register = exports.register = function register(req, res, next) {
  return _user2.default.register(new _user2.default({ username: req.body.username }), req.body.password, function (err, user) {
    return err ? res.status(400).send({ error: "Email address in use" }) : res.status(200).send({ user: user.id });
  });
};

var login = exports.login = function login(req, res, next) {
  _passport2.default.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      var token = _jsonwebtoken2.default.sign({ id: user._id, username: user.username }, secret);
      return res.status(200).json({ token: token });
    }
  })(req, res, next);
};
//# sourceMappingURL=users.js.map