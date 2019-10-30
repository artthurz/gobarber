import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';
import HoraryController from './app/controllers/HoraryController';
import ServicesController from './app/controllers/ServicesController';
import PeoplesController from './app/controllers/PeoplesController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/configuration/horary', HoraryController.index);
routes.put('/configuration/horary', HoraryController.update);

routes.get('/configuration/services', ServicesController.index);
routes.post('/configuration/services', ServicesController.store);
routes.put('/configuration/services/:id', ServicesController.update);
<<<<<<< HEAD
routes.delete('/configuration/services/:id', ServicesController.delete);
=======
>>>>>>> 92011715f34b9c5c39d5641d9b2fbd9c04f9f710

routes.get('/configuration/peoples', PeoplesController.index);
routes.post('/configuration/peoples', PeoplesController.store);
routes.put('/configuration/peoples/:id', PeoplesController.update);
routes.delete('/configuration/peoples/:id', PeoplesController.delete);

export default routes;
