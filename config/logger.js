const config = require('config');
const log4js = require('log4js');

const logger = log4js.getLogger(config.get('app.logging.index'));
logger.level = config.get('app.logging.level');

module.exports = logger;
