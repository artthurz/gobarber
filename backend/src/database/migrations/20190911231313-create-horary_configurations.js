module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('horary_configurations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sunday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      monday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      tuesday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      wednesday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      thursday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      friday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      saturday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      morning_start: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      morning_end: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      afternoon_start: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      afternoon_end: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      peoples_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('horary_configurations');
  },
};
