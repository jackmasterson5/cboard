const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class User extends Model { };
User.model = {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports = User;