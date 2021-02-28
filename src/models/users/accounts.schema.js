const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { Model, DataTypes } = Sequelize;

class Accounts extends Model {}

Accounts.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    accountNumber: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      unique: true,
      allowNull: false,
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
    status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '0 - Inactive, 1 - Active, 2 - Blocked',
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    modifiedBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: DB,
    modelName: 'Accounts',
    tableName: 'Accounts',
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    engine: 'INNODB',
    version: true,
    indexes: [
      {
        name: 'IDX_COMPOSITE_ACCOUNT_BRANCH',
        fields: ['id', 'branchAccessId'],
      },
      { name: 'IDX_COMPOSITE_ACCOUNT_TYPE', fields: ['id', 'accountTypeId'] },
      { name: 'IDX_FULL_USERNAME', fields: ['username'] },
      { name: 'IDX_FULL_EMAIL', fields: ['accountEmail'] },
      { name: 'IDX_FULL_ACCOUNT_NUMBER', fields: ['accountNumber'] },
    ],
  }
);

// alter the database, if there any changes in the schema
syncTable(Accounts, Accounts.name);

module.exports = Accounts;
