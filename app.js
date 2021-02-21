const DB = require('./config/sequelize');
const logger = require('./config/logger');

const DBConnection = async () => {
  try {
    const connection = DB.authenticate();

    if (connection) {
      logger.info(JSON.stringify({ msg: 'Database Connection Established...' }));
    }
  } catch (error) {
    logger.fatal(JSON.stringify({ error, msg: 'Unable to connect to the database' }));
  }
};

DBConnection();
