const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const { Model, DataTypes } = Sequelize;

class Branches extends Model {}

Branches.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM({ values: ['P', 'S', 'SA'] }),
      allowNull: false,
      defaultValue: 'S',
      comment: 'P-Parent, S-Sub, SA-Stand Alone',
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    brgy: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    paranoid: true,
    version: true,
    timestamps: true,
    modelName: 'Branches',
    tableName: 'Branches',
    engine: 'INNODB',
    indexes: [
      { name: 'IDX_COMPOSITE_BRANCHES', fields: ['id', 'name', 'type'] },
      { name: 'IDX_COMPOSITE_BRANCHES_2', fields: ['id', 'type'] },
      {
        name: 'IDX_COMPOSITE_BRANCHES_3',
        fields: ['id', 'name', 'type', 'city'],
      },
      {
        name: 'IDX_COMPOSITE_BRANCHES_4',
        fields: ['id', 'name', 'type', 'city', 'brgy'],
      },
      {
        name: 'IDX_COMPOSITE_BRANCHES_5',
        fields: ['id', 'name', 'type', 'city', 'brgy', 'region'],
      },
      {
        name: 'IDX_COMPOSITE_BRANCHES_6',
        fields: ['id', 'name', 'type', 'city', 'brgy', 'region', 'province'],
      },
      { name: 'IDX_COMPOSITE_BRANCHES_7', fields: ['id', 'name', 'status'] },
    ],
  }
);

syncTable(Branches, Branches.name);

module.exports = Branches;
