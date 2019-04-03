const Sequelize = require('sequelize');
const local = require('./configs/local');

let { username, password, database, host, dialect } = local;
// Option 1: Passing parameters separately
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

module.exports = sequelize;