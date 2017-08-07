'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [{
  username: 'Jerry'
}, {
  username: 'Graham'
}];

_mongoose2.default.connect('mongodb://localhost/kitchenFox');

users.map(function (data) {
  var user = new _user2.default(data);
  user.save();
});
//# sourceMappingURL=populateUser.js.map