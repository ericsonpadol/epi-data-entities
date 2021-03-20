const proxyquire = require('proxyquire');
const { Sequelize, sequelize } = require('sequelize-test-helpers');

describe('Test User Model', () => {
  let Model;

  beforeEach(() => {
    const Factory = proxyquire
      .noCallThru()
      .load('./users.schema.js', { sequelize: Sequelize });

    Model = new Factory(sequelize);
  });

  it('should have correct model name', () => {
    expect(Model).toHaveProperty('id');
    expect(Model).toHaveProperty('branchId');
    expect(Model).toHaveProperty('accountId');
  });
});
