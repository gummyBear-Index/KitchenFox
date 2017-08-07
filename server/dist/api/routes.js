'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./controllers/users');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('./models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var secret = '7x0jhxt&quot;9(thpX6';
// delete unless needed

router.get('/protected', function (req, res, next) {
  _passport2.default.authenticate('jwt', function (err, user, info) {
    console.log(req.headers.authorization);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(String(err));
    }
    if (user) {
      return res.status(200).json({ secret: '123' });
    }
  })(req, res, next);
});

router.route('/login').post(function (req, res, next) {
  return (0, _users.login)(req, res, next);
});

router.route('/register').post(function (req, res) {
  return (0, _users.register)(req, res);
});

// router.route('/users.json').get(userIndex);

router.route('/').get(function (req, res) {
  return res.send('Hello Errbody!');
});

exports.default = router;
//# sourceMappingURL=routes.js.map