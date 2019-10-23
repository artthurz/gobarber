import Sequelize, { Model } from 'sequelize';

class HoraryConfiguration extends Model {
  static init(sequelize) {
    super.init(
      {
        sunday: Sequelize.BOOLEAN,
        monday: Sequelize.BOOLEAN,
        tuesday: Sequelize.BOOLEAN,
        wednesday: Sequelize.BOOLEAN,
        thursday: Sequelize.BOOLEAN,
        friday: Sequelize.BOOLEAN,
        saturday: Sequelize.BOOLEAN,
        morning_start: Sequelize.TIME,
        morning_end: Sequelize.TIME,
        afternoon_start: Sequelize.TIME,
        afternoon_end: Sequelize.TIME,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'peoples_id', as: 'peoples' });
  }
}

export default HoraryConfiguration;
