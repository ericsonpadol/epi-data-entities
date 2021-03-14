const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');

const { Model, DataTypes } = Sequelize;

class RefCitymun extends Model {}

RefCitymun.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    psgcCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      field: 'psgc_code',
    },
    citymunDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'citymun_desc',
    },
    regCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      field: 'reg_code',
    },
    provCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      field: 'prov_code',
    },
    citymunCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      field: 'citymun_code',
    },
  },
  {
    sequelize: DB,
    tableName: 'REF_CITYMUN',
    modelName: 'RefCitymun',
    underscored: true,
  }
);

module.exports = RefCitymun;
