const logger = require('../../config/logger');

const syncTable = async (Table, tableName) => {
  try {
    await Table.sync({ alter: true });
    logger.info(
      JSON.stringify({ msg: `${tableName} is synced/altered successfully.` })
    );
  } catch (error) {
    logger.fatal(
      JSON.stringify({
        error: {
          name: error.name,
          msg: error.message,
          line: error.line,
          stack: error.stack,
        },
      })
    );
  }
};

module.exports = { syncTable };
