const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');

const { DataTypes, Model } = Sequelize;

class RefProvince extends Model {}

RefProvince.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    psgcCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      field: 'psgc_code',
    },
    provDesc: { type: DataTypes.TEXT, allowNull: true, field: 'prov_desc' },
    regCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'reg_code',
      defaultValue: null,
    },
    provCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      field: 'prov_code',
      underscored: true,
    },
  },
  {
    engine: 'MYISAM',
    sequelize: DB,
    tableName: 'REF_PROVINCE',
    modelName: 'RefProvince',
  }
);

module.exports = RefProvince;
