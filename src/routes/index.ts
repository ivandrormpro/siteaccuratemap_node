// src/routes/index.ts
import { Router } from 'express';
import usersRouter from './users.routes';
import provinciasRoutes from './provincias.routes';
import municipiosRouter from './municipios.routes';
import distritosRouter from './distritos.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/provincias', provinciasRoutes);

routes.use('/municipios', municipiosRouter);

routes.use('/distritos', distritosRouter);

export default routes;
