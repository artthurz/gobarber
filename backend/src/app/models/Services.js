import Sequelize, { Model } from 'sequelize';

class Services extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        duration: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Services;
