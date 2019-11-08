import Sequelize, { Model } from 'sequelize';

class AppointmentsServices extends Model {
  static init(sequelize) {
    super.init(
      {
        
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
    this.belongsTo(models.Services, {
      foreignKey: 'services_id',
      as: 'services',
    });
  }
}

export default AppointmentsServices;
