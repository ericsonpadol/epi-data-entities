const logger = require('../../config/logger');

const syncTable = async (Table, tableName) => {
  try {
    await Table.sync({ alter: true });
    logger.info(
      JSON.stringify({ msg: `${tableName} is synced/altered successfully.` })
    );
  } catch (error) {
    logger.error(
      JSON.stringify({
        error: { name: error.name, msg: error.message, full: error },
      })
    );
  }
};

module.exports = { syncTable };
