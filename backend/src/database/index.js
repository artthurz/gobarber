import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import HoraryConfiguration from '../app/models/HoraryConfiguration';
import Services from '../app/models/Services';
import Peoples from '../app/models/Peoples';
import AppointmentsServices from '../app/models/AppointmentsServices';

import databaseConfig from '../config/database';
import Financial from '../app/models/Financial';
import Audit from '../app/models/Audit';

const models = [
  Appointment,
  AppointmentsServices,
  Audit,
  File,
  Financial,
  HoraryConfiguration,
  Peoples,
  Services,
  User
];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
