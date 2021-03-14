const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');

const { DataTypes, Model } = Sequelize;

class RefBgry extends Model {}

RefBgry.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    brgyCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      field: 'brgy_code',
    },
    brgyDesc: { type: DataTypes.TEXT, allowNull: true, field: 'brgy_desc' },
    regCode: {
      field: 'reg_code',
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    provCode: {
      field: 'prov_code',
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    citymunCode: {
      field: 'citymun_code',
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
  },
  {
    sequelize: DB,
    tableName: 'REF_BRGY',
    modelName: 'RefBgry',
    underscored: true,
  }
);

module.exports = RefBgry;
