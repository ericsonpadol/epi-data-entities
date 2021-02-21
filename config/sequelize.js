const Sequelize = require('sequelize');
const config = require('config');

const DB = new Sequelize(
  config.get('database.db_name'),
  config.get('database.username'),
  config.get('database.secret'),
  {
    dialect: config.get('database.dialect'),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    connectTimeout: 1000,
    host: config.get('database.host'),
    waitForConnections: true,
    queueLimit: 0,
    logging: false,
  }
);

module.exports = DB;
