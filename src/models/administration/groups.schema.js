const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { Model, DataTypes } = Sequelize;

class Groups extends Model {}

Groups.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'name',
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'desc',
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
    timestamps: true,
    paranoid: true,
    version: true,
    modelName: 'Groups',
    tableName: 'GROUPS',
    engine: 'MYISAM',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    indexes: [{ name: 'IDX_COMPOSITE_GROUP', fields: ['name'] }],
  }
);

syncTable(Groups);

module.exports = Groups;
