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
    modelName: 'Roles',
    tableName: 'Roles',
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    engine: 'INNODB',
    version: true,
    indexes: [{ name: 'IDX_COMPOSITE_ROLE', fields: ['id', 'name'] }],
  }
);

syncTable(Roles, Roles.name);

module.exports = Roles;
