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
      field: 'id',
    },
    userId: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
      field: 'user_id',
      comment: 'user object id',
    },
    givenName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'given_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
    },
    mobileNumber: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      unique: true,
      field: 'mobile_number',
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'avatar',
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'created_by',
    },
    modifiedBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'modified_by',
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'department',
    },
  },
  {
    sequelize: DB,
    underscored: true,
    modelName: 'UserInfo',
    tableName: 'USER_INFO',
    paranoid: true,
    timestamps: true,
    engine: 'MYISAM',
    version: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    indexes: [
      { name: 'IDX_COMPOSITE_USER_ACCOUNT', fields: ['user_id'] },
      { name: 'IDX_FULL_GIVEN_NAME', fields: ['given_name'] },
      { name: 'IDX_FULL_LAST_NAME', fields: ['last_name'] },
      { name: 'IDX_FULL_MOBILE_NUMBER', fields: ['mobile_number'] },
    ],
  }
);

syncTable(UserInfo);

module.exports = UserInfo;
