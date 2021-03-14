const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');

const { syncTable } = require('../../helpers/migration.helper');

const { Model, DataTypes } = Sequelize;

class Permissions extends Model {}

Permissions.init(
  {
    id: {
      type: DataTypes.CHAR(5),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'creadted_by',
    },
    modifiedBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'modified_by',
    },
  },
  {
    sequelize: DB,
    modelName: 'Permissions',
    tableName: 'PERMISSIONS',
    paranoid: true,
    version: true,
    timestamps: true,
    engine: 'MYISAM',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    indexes: [{ name: 'IDX_FULL_PERMISSION_NAME', fields: ['name'] }],
  }
);

syncTable(Permissions);

module.exports = Permissions;
