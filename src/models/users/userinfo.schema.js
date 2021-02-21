const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { Model, DataTypes } = Sequelize;

class UserInfo extends Model {}

UserInfo.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    accountId: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    },
    givenName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      unique: true,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pin: {
      type: DataTypes.TINYINT(5),
      allowNull: true,
      comment: 'dunno what is this for',
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
    modelName: 'UserInfo',
    tableName: 'UserInfo',
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    engine: 'INNODB',
    version: true,
    indexes: [
      { name: 'IDX_COMPOSITE_USER_ACCOUNT', fields: ['id', 'accountId'] },
      { name: 'IDX_FULL_GIVEN_NAME', fields: ['givenName'] },
      { name: 'IDX_FULL_LAST_NAME', fields: ['lastName'] },
      { name: 'IDX_FULL_MOBILE_NUMBER', fields: ['mobileNumber'] },
    ],
  }
);

syncTable(UserInfo, UserInfo.name);

module.exports = UserInfo;
