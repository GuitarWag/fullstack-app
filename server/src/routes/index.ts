import { Router } from 'express';
import auth from './auth';
import user from './user';
import check from './check';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/check', check);

export default routes;
