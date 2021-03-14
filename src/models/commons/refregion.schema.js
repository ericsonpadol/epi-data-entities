const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');

const { Model, DataTypes } = Sequelize;

class RefRegion extends Model {}

RefRegion.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    psgcCode: {
      field: 'psgc_code',
      defaultValue: null,
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    regDesc: { field: 'reg_desc', type: DataTypes.TEXT, allowNull: true },
    regCode: {
      field: 'reg_code',
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: DB,
    engine: 'MYISAM',
    tableName: 'REF_REGION',
    modelName: 'RefRegion',
    underscored: true,
  }
);

module.exports = RefRegion;
