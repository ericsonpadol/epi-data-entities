const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { Model, DataTypes } = Sequelize;

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      field: 'id',
      comment: 'object id',
    },
    accountId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      unique: true,
      allowNull: false,
      field: 'account_id',
    },
    branchId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'branch_id',
    },
    userTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_type_id',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'email',
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'username',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
    status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '0 - Inactive, 1 - Active, 2 - Blocked',
      field: 'status',
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
    pin: {
      type: DataTypes.TINYINT(4),
      allowNull: true,
      field: 'pin',
      comment:
        'This is the override pin, that can be used by a branch manager or backoffice admin.',
    },
  },
  {
    sequelize: DB,
    underscored: true,
    modelName: 'Users',
    tableName: 'USERS',
    paranoid: true,
    timestamps: true,
    engine: 'MYISAM',
    version: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
    indexes: [
      {
        name: 'IDX_COMPOSITE_ACCOUNT_BRANCH',
        fields: ['id', 'branch_id'],
      },
      { name: 'IDX_COMPOSITE_ACCOUNT_TYPE', fields: ['id', 'user_type_id'] },
      { name: 'IDX_FULL_USERNAME', fields: ['username'] },
      { name: 'IDX_FULL_EMAIL', fields: ['email'] },
      { name: 'IDX_FULL_ACCOUNT_ID', fields: ['account_id'] },
    ],
  }
);

// alter the database, if there any changes in the schema
syncTable(Users);

module.exports = Users;
