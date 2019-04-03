const db = require('./services/database');
const user = require('./services/users');
const sequelize = require('./connection');

db.connect(sequelize)
  .then(() => {
    return user.init(sequelize);
  })
  .then(() => {
    return user.sync();
  })
  .then(() => {
    return user.create({ firstName: 'Jack', lastName: 'Masterson' })
  })
  .then(name => {
    console.log(`${name}'s auto-generated ID:`, name.id);
    return db.close(sequelize);
  })
  .catch(err => {
    console.error('Error: ', err);
  });