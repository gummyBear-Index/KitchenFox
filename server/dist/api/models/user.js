'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _passportLocalMongoose = require('passport-local-mongoose');

var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = new _mongoose.Schema({});

User.plugin(_passportLocalMongoose2.default, {
  usernameUnique: true
});

exports.default = _config2.default.model('User', User);
//# sourceMappingURL=user.js.map