import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import RolesController from './app/controllers/RolesController';
import RolePermissionController from './app/controllers/RolePermissionController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';
import HoraryController from './app/controllers/HoraryController';
import ServicesController from './app/controllers/ServicesController';
import PeoplesController from './app/controllers/PeoplesController';
import FinancialController from './app/controllers/FinancialController';
import AuditController from './app/controllers/AuditController';
import GraficsController from './app/controllers/GraficsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/audit', AuditController.index);

routes.get('/roles', RolesController.index);
routes.post('/roles', RolesController.store);
routes.put('/roles/:id', RolesController.update);

routes.get('/rolepermission', RolePermissionController.index);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.put('/usersAdm/:id', UserController.updateAdm);
routes.delete('/users/:id', UserController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/financials', FinancialController.index);
routes.put('/financials/:id', FinancialController.update);

routes.get('/configuration/peoples', PeoplesController.index);
routes.post('/configuration/peoples', PeoplesController.store);
routes.put('/configuration/peoples/:id', PeoplesController.update);
routes.delete('/configuration/peoples/:id', PeoplesController.delete);

routes.get('/configuration/horary', HoraryController.index);
routes.post('/configuration/horary', HoraryController.store);
routes.put('/configuration/horary/:id', HoraryController.update);

routes.get('/configuration/services', ServicesController.index);
routes.post('/configuration/services', ServicesController.store);
routes.put('/configuration/services/:id', ServicesController.update);
routes.delete('/configuration/services/:id', ServicesController.delete);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.put('/appointments/:id', AppointmentController.update);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get(
  '/grafics/agendamentosDaSemana',
  GraficsController.agendamentosDaSemana
);
routes.get(
  '/grafics/valorArrecadadoNaSemana',
  GraficsController.valorArrecadadoNaSemana
);

export default routes;
