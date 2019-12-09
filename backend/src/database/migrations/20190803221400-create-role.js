module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      create_appointment: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      roles: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      schedule: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      financial: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      people: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      services: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      grafics: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      users: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      configuration: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    return queryInterface.dropTable('roles');
  },
};
