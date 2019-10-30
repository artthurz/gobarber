import Sequelize, { Model } from 'sequelize';

class Peoples extends Model {
  static init(sequelize) {
    super.init(
      {
        users_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        fone: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
        email: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'users_id', as: 'user' });
  }

}

export default Peoples;
