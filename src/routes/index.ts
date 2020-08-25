// src/routes/index.ts
import { Router } from 'express';
import sitesRoutes from './sites.routes';
import provinciasRoutes from './provincias.routes';

const routes = Router();

routes.use('/provincias', provinciasRoutes);

routes.use('/sites', sitesRoutes);

export default routes;
