module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('audit', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date_action: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      operation: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      table_action: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      text_action: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
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
    return queryInterface.dropTable('audit');
  },
};
