module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments_services', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      appointments_id: {
        type: Sequelize.INTEGER,
        references: { model: 'appointments', key: 'id' },
        allowNull: false,
      },
      services_id: {
        type: Sequelize.INTEGER,
        references: { model: 'services', key: 'id' },
        allowNull: false,
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
    return queryInterface.dropTable('appointments_services');
  },
};
