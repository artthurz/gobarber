module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('services', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
<<<<<<< HEAD
      canceled_at: {
        type: Sequelize.DATE,
      },
=======
>>>>>>> 92011715f34b9c5c39d5641d9b2fbd9c04f9f710
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
    return queryInterface.dropTable('services');
  },
};
