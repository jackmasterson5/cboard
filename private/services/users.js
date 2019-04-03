const User = require('../models/users');

module.exports = {
  sync: function () {
    console.log('doing it');
    return User.sync();
  },
  init: function (sequelize) {
    User.init(User.model, {
      sequelize,
      // options
    });
  },
  create: function ({ firstName, lastName }) {
    console.log('Name: ', firstName, lastName);
    return User.create({ firstName, lastName });
  },
  findAll: function () {
    return User.findAll();
  }
}
