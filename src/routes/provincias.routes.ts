import { Router } from 'express';

import ProvinciasRepository from '../repositories/ProvinciasRepository';
import CreateProvinciaService from '../services/CreateProvinciaService';

const provinciasRoutes = Router();

const provinciasRepository = new ProvinciasRepository();

provinciasRoutes.get('/', (request, response) => {
    const provincias = provinciasRepository.all();
    return response.json(provincias);
});

provinciasRoutes.post('/', (request, response) => {
    try {
        const { name } = request.body;
        const createProvincia = new CreateProvinciaService(
            provinciasRepository,
        );
        const provincia = createProvincia.execute({ name });
        return response.json(provincia);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default provinciasRoutes;
