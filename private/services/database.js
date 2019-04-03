module.exports = {
  connect: function (sequelize) {
    return sequelize
      .authenticate()
      .catch(err => {
        console.error('Unable to connect to the database:', err);
        return err;
      });
  },
  close: function (sequelize) {
    sequelize.close()
      .then(() => {
        console.log('Connection closed successfully.');
      })
      .catch(err => {
        console.error('Unable to close connection: ', err);
        return err;
      });
  }
}
