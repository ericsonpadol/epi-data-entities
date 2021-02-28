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
    timestamps: true,
    paranoid: true,
    version: true,
    modelName: 'Groups',
    tableName: 'Groups',
    engine: 'INNODB',
    indexes: [
      { name: 'IDX_COMPOSITE_GROUP', fields: ['id', 'name'] },
      {
        name: 'IDX_COMPOSITE_CREATED_MODIFIED',
        fields: ['id', 'createdBy', 'modifiedBy'],
      },
    ],
  }
);

syncTable(Groups, Groups.name);

module.exports = Groups;
