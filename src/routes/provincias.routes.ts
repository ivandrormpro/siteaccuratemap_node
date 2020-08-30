import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ProvinciasRepository from '../repositories/ProvinciasRepository';
import CreateProvinciaService from '../services/CreateProvinciaService';
import UpdateProvinciaService from '../services/UpdateProvinciaService';

const provinciasRoutes = Router();

provinciasRoutes.get('/', async (request, response) => {
    const provinciasRepository = getCustomRepository(ProvinciasRepository);
    const provincias = await provinciasRepository.find({
        select: ['id', 'name'],
        order: {
            name: 'ASC',
        },
    });
    return response.json(provincias);
});

provinciasRoutes.get('/:id', async (request, response) => {
    const { id } = request.params;
    const provinciasRepository = getCustomRepository(ProvinciasRepository);
    const provincia = await provinciasRepository.findOne({ id });
    return response.json(provincia);
});

provinciasRoutes.get('/:id/municipios', async (request, response) => {
    const { id } = request.params;
    const provinciasRepository = getCustomRepository(ProvinciasRepository);
    const data = await provinciasRepository.find({
        relations: ['municipios'],
        where: { id },
    });
    return response.json(data);
});

provinciasRoutes.post('/', async (request, response) => {
    try {
        const { name } = request.body;
        const provinciasRepository = getCustomRepository(ProvinciasRepository);
        const existProvincia = await provinciasRepository.findOne({
            where: { name },
        });

        if (existProvincia) {
            return response.status(404).json({
                message: 'Já existe uma provincia cadastrada com este nome',
            });
        }

        const createProvincia = new CreateProvinciaService();
        const provincia = await createProvincia.execute({ name });
        return response.json(provincia);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

provinciasRoutes.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { name } = request.body;
        const provinciasRepository = getCustomRepository(ProvinciasRepository);
        const provincia = await provinciasRepository.findOne({ id });

        if (!name) {
            return response
                .status(404)
                .json({ message: 'Deve preencher o campo name!' });
        }

        if (!provincia) {
            return response.status(404).json({ message: 'ID inválido!' });
        }

        const updateProvincia = new UpdateProvinciaService();
        const updatedProvincia = await updateProvincia.execute({
            id,
            name,
        });
        return response.json(updatedProvincia);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

provinciasRoutes.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        if (!id) {
            return response.status(404).json({ message: 'ID inválido!' });
        }
        const provinciasRepository = getCustomRepository(ProvinciasRepository);
        const provincia = await provinciasRepository.delete({ id });
        return response.json(provincia);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default provinciasRoutes;
