import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import MunicipiosRepository from '../repositories/MunicipiosRepository';
import CreateMunicipioService from '../services/CreateMunicipioService';
import UpdateMunicipioService from '../services/UpdateMunicipioService';

const municipiosRoutes = Router();

municipiosRoutes.get('/', async (request, response) => {
    const municipiosRepository = getCustomRepository(MunicipiosRepository);
    const municipios = await municipiosRepository.find({
        select: ['id', 'name'],
        order: {
            name: 'ASC',
        },
    });
    return response.json(municipios);
});

municipiosRoutes.get('/:id/distritos', async (request, response) => {
    const { id } = request.params;
    const municipiosRepository = getCustomRepository(MunicipiosRepository);
    const data = await municipiosRepository.find({
        relations: ['distritos'],
        where: { id },
    });
    return response.json(data);
});

municipiosRoutes.get('/:id', async (request, response) => {
    const { id } = request.params;
    const municipiosRepository = getCustomRepository(MunicipiosRepository);
    const municipio = await municipiosRepository.findOne({ id });
    return response.json(municipio);
});

municipiosRoutes.post('/', async (request, response) => {
    try {
        const { name, provincia_id } = request.body;
        const createMunicipio = new CreateMunicipioService();

        const municipio = await createMunicipio.execute({
            name,
            provincia_id,
        });

        return response.json(municipio);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

municipiosRoutes.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const { name, provincia_id } = request.body;

        if (name === '' && provincia_id === '') {
            return response
                .status(404)
                .json({ message: 'Deve preencher os campos!' });
        }

        const municipiosRepository = getCustomRepository(MunicipiosRepository);

        const municipio = await municipiosRepository.findOne({ id });

        if (!municipio) {
            return response
                .status(404)
                .json({ message: 'Municipio nao existe!' });
        }

        const updateMunicipio = new UpdateMunicipioService();
        const updatedMunicipio = await updateMunicipio.execute({
            municipio,
            provincia_id,
            name,
        });
        return response.json(updatedMunicipio);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

municipiosRoutes.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        if (!id) {
            return response.status(404).json({ message: 'ID inválido!' });
        }
        const municipiosRepository = getCustomRepository(MunicipiosRepository);
        const municipio = await municipiosRepository.delete({ id });
        return response.json(municipio);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default municipiosRoutes;
