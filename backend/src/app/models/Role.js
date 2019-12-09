import Sequelize, { Model } from 'sequelize';

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        create_appointment: Sequelize.BOOLEAN,
        schedule: Sequelize.BOOLEAN,
        financial: Sequelize.BOOLEAN,
        people: Sequelize.BOOLEAN,
        services: Sequelize.BOOLEAN,
        grafics: Sequelize.BOOLEAN,
        users: Sequelize.BOOLEAN,
        configuration: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Role;
