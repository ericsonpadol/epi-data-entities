const Sequelize = require('sequelize');

const DB = require('../../../config/sequelize');
const { syncTable } = require('../../helpers/migration.helper');

const Users = require('../users/users.schema');
const Branches = require('../administration/branches.schema');

const { Model, DataTypes } = Sequelize;

class RefUserBranchAccess extends Model {}

RefUserBranchAccess.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: Users, key: 'id' },
      field: 'user_id',
    },
    branchId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: Branches, key: 'id' },
      field: 'branch_id',
    },
  },
  {
    sequelize: DB,
    modelName: 'RefUserBranchAccess',
    tableName: 'REF_USER_BRANCH_ACCESS',
    underscored: true,
    engine: 'MYISAM',
    indexes: [
      {
        using: 'BTREE',
        name: 'IX_COMPOSITE_REF_USER_BRANCH',
        fields: ['user_id', 'branch_id'],
      },
    ],
  }
);

syncTable(RefUserBranchAccess);

module.exports = RefUserBranchAccess;
