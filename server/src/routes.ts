import express from 'express';
import ClassesController from './controllers/classesController';
import ConnectionController from './controllers/connectionsControoler';

const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionController();
console.log("Dimas")


routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);
routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);


export default routes;