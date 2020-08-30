/* eslint-disable no-param-reassign */
import { getRepository } from 'typeorm';
import Distrito from '../models/distrito';
import provinciasRoutes from '../routes/provincias.routes';

interface Request {
    distrito: Distrito;
    name: string;
    provincia_id: string;
    municipio_id: string;
}

class UpdateDistritoService {
    public async execute({
        distrito,
        name,
        provincia_id,
        municipio_id,
    }: Request): Promise<Distrito> {
        const distritosRepository = getRepository(Distrito);

        distrito.name = name;
        distrito.provincia_id = provincia_id;
        distrito.municipio_id = municipio_id;

        await distritosRepository.save(distrito);

        return distrito;
    }
}

export default UpdateDistritoService;
