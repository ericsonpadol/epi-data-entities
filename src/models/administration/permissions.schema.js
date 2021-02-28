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
    description: {
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
    modelName: 'Permissions',
    tableName: 'Permissions',
    paranoid: true,
    version: true,
    timestamps: true,
    engine: 'INNODB',
    indexes: [
      { name: 'IDX_COMPOSITE_PERMISSION', fields: ['id', 'name'] },
      { name: 'IDX_FULL_PERMISSION_NAME', fields: ['name'] },
      {
        name: 'IDX_COMPOSITE_CREATED_MODIFIED_BY',
        fields: ['createdBy', 'modifiedBy'],
      },
    ],
  }
);

syncTable(Permissions, Permissions.name);

module.exports = Permissions;
