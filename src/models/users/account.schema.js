const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const logger = require('../../../config/logger');

const { Model, DataTypes } = Sequelize;

class Account extends Model { }

Account.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    branchAccessId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    accountTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    accountEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: DB,
    modelName: 'Account',
    tableName: 'Account',
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    engine: 'INNODB',
    version: true,
    indexes: [
      { name: 'IDX_COMPOSITE_ACCOUNT_BRANCH', fields: ['id', 'branchAccessId'] },
      { name: 'IDX_COMPOSITE_ACCOUNT_TYPE', fields: ['id', 'accountTypeId'] },
      { name: 'IDX_FULL_USERNAME', fields: ['username'] },
      { name: 'IDX_FULL_EMAIL', fields: ['accountEmail'] },
    ],
  }
);

// alter the database, if there any changes in the schema
const syncTable = async () => {
  try {
    await Account.sync({ alter: true });
    logger.info(JSON.stringify({ msg: 'Account Table is updated successfully.' }));
  } catch (error) {
    logger.error(JSON.stringify({ error: { name: error.name, msg: error.message, full: error } }));
  }
};

syncTable();

module.exports = Account;
