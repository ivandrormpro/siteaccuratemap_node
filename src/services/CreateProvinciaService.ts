import { getRepository } from 'typeorm';
import Provincia from '../models/provincia';

interface Request {
    name: string;
}

class CreateProvinciaService {
    public async execute({ name }: Request): Promise<Provincia> {
        const provinciasRepository = getRepository(Provincia);

        const provincia = provinciasRepository.create({
            name,
        });

        await provinciasRepository.save(provincia);

        return provincia;
    }
}

export default CreateProvinciaService;
