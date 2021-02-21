const Sequelize = require('sequelize');

const DB = require('./config/sequelize');
const logger = require('./config/logger');

/**
 * import the schema here
 */
const Account = require('./src/models/users/account.schema');

const DBConnection = async () => {
  try {
    DB.authenticate();
    logger.info(JSON.stringify({ msg: 'Database Connection Established...' }));
  } catch (error) {
    logger.fatal(JSON.stringify({ error, msg: 'Unable to connect to the database' }));
  }
};

DBConnection();

module.exports = { Sequelize, DB, Account };
