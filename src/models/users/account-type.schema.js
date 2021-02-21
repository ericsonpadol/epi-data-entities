const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { DataTypes, Model } = Sequelize;

class AccountType extends Model {}

AccountType.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    typeName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    typeDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    modelName: 'AccountType',
    tableName: 'AccountType',
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    engine: 'INNODB',
    version: true,
    indexes: [{ name: 'IDX_FULL_USERTYPE', fields: ['typeName'] }],
  }
);

syncTable(AccountType, AccountType.name);

module.exports = AccountType;
