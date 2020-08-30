import { getRepository } from 'typeorm';
import Provincia from '../models/provincia';

interface Request {
    id: string;
    name: string;
}

class UpdateProvinciaService {
    public async execute({ id, name }: Request): Promise<Provincia> {
        const provinciasRepository = getRepository(Provincia);

        await provinciasRepository.update(id, { name });

        return provinciasRepository.findOneOrFail({ id });
    }
}

export default UpdateProvinciaService;
