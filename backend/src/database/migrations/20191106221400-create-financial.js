module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('financial', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      total_value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      discount_percentage: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      discount_value: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      appointments_services_id: {
        type: Sequelize.INTEGER,
        references: { model: 'appointments_services', key: 'id' },
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('financial');
  },
};
