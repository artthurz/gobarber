import Sequelize, { Model } from 'sequelize';

class Audit extends Model {
  static init(sequelize) {
    super.init(
      {
        date_action: Sequelize.DATE,
        operation: Sequelize.TEXT,
        table_action: Sequelize.TEXT,
        text_action: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Audit;
