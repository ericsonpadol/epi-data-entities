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
      field: 'id',
    },
    type: {
      type: DataTypes.ENUM({ values: ['P', 'S', 'SA'] }),
      allowNull: false,
      defaultValue: 'S',
      comment: 'P-Parent, S-Sub, SA-Stand Alone',
      field: 'type',
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name',
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'address',
    },
    brgyCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: 'check the table REF_BRGY and check brgy. code',
      field: 'brgy_code',
    },
    citymunCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'citymun_code',
      comment: 'check the table REF_CITYMUN and check city mun code',
    },
    reg_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'reg_code',
    },
    prov_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'prov_code',
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
  },
  {
    sequelize: DB,
    paranoid: true,
    version: true,
    timestamps: true,
    modelName: 'Branches',
    tableName: 'BRANCHES',
    engine: 'MYISAM',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    indexes: [
      { name: 'IDX_COMPOSITE_BRANCHES', fields: ['id', 'name', 'type'] },
      { name: 'IDX_COMPOSITE_BRANCHES_2', fields: ['id', 'type'] },
      {
        name: 'IDX_COMPOSITE_BRANCHES_3',
        fields: ['id', 'name', 'type', 'citymun_code'],
      },
      {
        name: 'IDX_COMPOSITE_BRANCHES_4',
        fields: ['id', 'name', 'type', 'citymun_code', 'brgy_code'],
      },
      {
        name: 'IDX_COMPOSITE_BRANCHES_5',
        fields: ['id', 'name', 'type', 'citymun_code', 'brgy_code', 'reg_code'],
      },
      {
        name: 'IDX_COMPOSITE_BRANCHES_6',
        fields: [
          'id',
          'name',
          'type',
          'citymun_code',
          'brgy_code',
          'reg_code',
          'prov_code',
        ],
      },
      { name: 'IDX_COMPOSITE_BRANCHES_7', fields: ['id', 'name', 'status'] },
    ],
  }
);

syncTable(Branches);

module.exports = Branches;
