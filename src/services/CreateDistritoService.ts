import { getRepository } from 'typeorm';
import Distrito from '../models/distrito';

interface Request {
    name: string;
    municipio_id: string;
    provincia_id: string;
}

class CreateDistritoService {
    public async execute({
        name,
        municipio_id,
        provincia_id,
    }: Request): Promise<Distrito> {
        const distritosRepository = getRepository(Distrito);

        const distrito = distritosRepository.create({
            name,
            municipio_id,
            provincia_id,
        });

        await distritosRepository.save(distrito);

        return distrito;
    }
}

export default CreateDistritoService;
