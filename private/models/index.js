const User = require('./users');

User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
    sequelize,
    // options
  });