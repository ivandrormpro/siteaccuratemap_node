import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import DistritosRepository from '../repositories/DistritosRepository';
import UpdateDistritoService from '../services/UpdateDistritoService';
import CreateDistritoService from '../services/CreateDistritoService';

const distritosRoutes = Router();

distritosRoutes.get('/', async (request, response) => {
    const distritosRepository = getCustomRepository(DistritosRepository);
    const distritos = await distritosRepository.find({
        select: ['id', 'name'],
        order: {
            name: 'ASC',
        },
    });
    return response.json(distritos);
});

distritosRoutes.get('/:id', async (request, response) => {
    const { id } = request.params;
    const distritosRepository = getCustomRepository(DistritosRepository);
    const distrito = await distritosRepository.findOne({ id });
    return response.json(distrito);
});

distritosRoutes.post('/', async (request, response) => {
    try {
        const { name, municipio_id, provincia_id } = request.body;
        const createDistrito = new CreateDistritoService();

        const distrito = await createDistrito.execute({
            name,
            municipio_id,
            provincia_id,
        });

        return response.json(distrito);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

distritosRoutes.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const { name, municipio_id, provincia_id } = request.body;

        if (name === '' && provincia_id === '' && municipio_id === '') {
            return response
                .status(404)
                .json({ message: 'Deve preencher os campos!' });
        }

        const distritosRepository = getCustomRepository(DistritosRepository);

        const distrito = await distritosRepository.findOne({ id });

        if (!distrito) {
            return response
                .status(404)
                .json({ message: 'Distrito nao existe!' });
        }

        const updateDistrito = new UpdateDistritoService();
        const updatedDistrito = await updateDistrito.execute({
            distrito,
            provincia_id,
            municipio_id,
            name,
        });
        return response.json(updatedDistrito);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

distritosRoutes.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        if (!id) {
            return response.status(404).json({ message: 'ID inválido!' });
        }
        const distritosRepository = getCustomRepository(DistritosRepository);
        const distrito = await distritosRepository.delete({ id });
        return response.json(distrito);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default distritosRoutes;
