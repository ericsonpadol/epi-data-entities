const Sequelize = require('sequelize');

const DB = require('./config/sequelize');
const logger = require('./config/logger');

/**
 * import the schema here
 */
const Accounts = require('./src/models/users/users.schema');
const UserInfo = require('./src/models/users/userinfo.schema');
const Roles = require('./src/models/administration/roles.schema');
const Permissions = require('./src/models/administration/permissions.schema');
const Groups = require('./src/models/administration/groups.schema');
const Branches = require('./src/models/administration/branches.schema');

/**
 * import Reference Schema
 */
const RefBgry = require('./src/models/commons/refbrgy.schema');
const RefCitymun = require('./src/models/commons/refcitymun.schema');
const RefProvince = require('./src/models/commons/refprovince.schema');
const RefRegion = require('./src/models/commons/refregion.schema');
const RefUserBranchAccess = require('./src/models/references/refuserbranchaccess.schema');

const DBConnection = () => {
  try {
    DB.authenticate();
    logger.info(JSON.stringify({ msg: 'Database Connection Established...' }));
  } catch (error) {
    logger.fatal(
      JSON.stringify({
        error: {
          name: error.name,
          msg: error.msg,
          line: error.line,
          stack: error.stack,
        },
      })
    );
  }
};

DBConnection();

module.exports = {
  Sequelize,
  DB,
  Accounts,
  UserInfo,
  Roles,
  Permissions,
  Groups,
  Branches,
  RefRegion,
  RefCitymun,
  RefBgry,
  RefProvince,
  RefUserBranchAccess,
};
