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
<<<<<<< HEAD
        canceled_at: Sequelize.DATE,
=======
>>>>>>> 92011715f34b9c5c39d5641d9b2fbd9c04f9f710
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Services;
