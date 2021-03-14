const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { DataTypes, Model } = Sequelize;

class Roles extends Model {}

Roles.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
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
  },
  {
    sequelize: DB,
    modelName: 'Roles',
    tableName: 'ROLES',
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    engine: 'MYISAM',
    version: true,
    underscored: true,
    indexes: [{ name: 'IDX_COMPOSITE_ROLE', fields: ['name'] }],
  }
);

syncTable(Roles);

module.exports = Roles;
