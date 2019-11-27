import Sequelize, { Model } from 'sequelize';

class Financial extends Model {
  static init(sequelize) {
    super.init(
      {
        total_value: Sequelize.DOUBLE,
        discount_percentage: Sequelize.INTEGER,
        discount_value: Sequelize.DOUBLE,
        status: Sequelize.BOOLEAN,
        observation: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Appointment, {
      foreignKey: 'appointments_id',
      as: 'appointment',
    });
    
  }
}

export default Financial;
