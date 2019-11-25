import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import User from '../models/User';
import File from '../models/File';
import Appointment from '../models/Appointment';
import Notification from '../schemas/Notification';
import AppointmentsServices from '../models/AppointmentsServices';
import Services from '../models/Services';
import Financial from '../models/Financial';


import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';
import Peoples from '../models/Peoples';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: { user_id: req.userID, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date', 'past', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      client_id: Yup.number().required(),
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
      services_id: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { client_id, provider_id, date, services_id } = req.body;

    /**
     * Check if provider_id is a provider
     */
    const isProvider = await User.findOne({
      where: { id: provider_id, admin: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    /**
     * Check for past dates
     */
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    /**
     * Check date availability
     */

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Appointment date is not available' });
    }

    const appointment = await Appointment.create({
      date,
      client_id,
      provider_id,
    });

    const appointments = await Appointment.findAll();

    const appointmentId = appointments[appointments.length - 1];

    const appserv = [];

    for (let i = 0; i < services_id.length; i++) {
      appserv[appserv.length] = {
        appointments_id: appointmentId.id,
        services_id: services_id[i],
      };
    }

    const services = await AppointmentsServices.bulkCreate(appserv, {
      returning: true,
    });

    /**
     * Notify appointment provider
     */

    const user = await User.findByPk(req.userID);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      {
        locale: pt,
      }
    );

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    return res.json({ appointment, services });
  }

  async update(req, res) {}

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'login'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    if (appointment.user_id !== req.userID) {
      return res.status(401).json({
        error: "You don't have permission to cancel this appointment.",
      });
    }

    const dateWithSub = subHours(appointment.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      return res.status(401).json({
        error: 'You can only cancel appointments 2 hours in advance.',
      });
    }

    appointment.canceled_at = new Date();

    await appointment.save();

    await Queue.add(CancellationMail.key, {
      appointment,
    });

    return res.json(appointment);
  }

  async geraFinanceiro(req, res) {

    var totalValor = 0;

    const appointment = await Appointment.findByPk(req.params.appointment_id);
    const people = await Peoples.findByPk(appointment.client_id);
    const appointment_services = await AppointmentsServices.findAll({ where: {appointments_id: appointment.id}} );

    const count = await AppointmentsServices.findAndCountAll({ where: {appointments_id: appointment.id}} );
    
    for (let i = 0; i < count.count; i++) {
      const item = appointment_services[i];
      
      const service = await Services.findOne({ where: {id: item.services_id}} );
            
      var appointments_services_id = item.id;
      var total_value = service.price;
      var status = false;
      var observation = "Serviço: "+service.name+" Cliente: "+people.name;  
      
      var fin = [];
      fin[i] = {appointments_services_id,
        total_value,
        status,
        observation};      
    }
    console.log("AQUI AQUI AQUI AQUI AQUI");
    console.log(fin);
    console.log("AQUI AQUI AQUI AQUI AQUI");
    const financials = await Financial.create(fin);

    return res.json(financials);
  }

  async calculaTempo(appointment_id) {

    


    
    return res.json(appointments);
  }

  async calculaValor(appointment_id) {
    
    var totalValor = 0;

    const appointment = await Appointment.findByPk(req.params.appointment_id);
    const appointment_services = await AppointmentsServices.findAll({ where: {appointments_id: appointment.id}} );
    
    async function somar(item) {
      const service = await Services.findOne({ where: {id: item.services_id}} );
      var valor = service.price;

      totalValor += valor;

      console.log(totalValor);
    }
    
    appointment_services.forEach(somar);

    return res.json(totalValor);

  }

}

export default new AppointmentController();
