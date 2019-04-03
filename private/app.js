const db = require('./services/database');
const user = require('./services/users');
const sequelize = require('./connection');

db.connect(sequelize)
  .then(() => user.init(sequelize))
  .then(() => user.sync())
  .then(() => user.create({ firstName: 'Jack', lastName: 'Masterson' }))
  .then(() => db.close(sequelize))
  .catch(err => {
    console.error('Error: ', err);
  });