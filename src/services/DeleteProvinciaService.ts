import { getRepository } from 'typeorm';
import Provincia from '../models/provincia';
import { json } from 'express';

interface Request {
    id: string;
}

class DeleteProvinciaService {
    public async execute({ id }: Request): Promise<void> {
        const provinciasRepository = getRepository(Provincia);

        await provinciasRepository.delete({ id });

        return HTMLOutputElement.s;
    }
}

export default DeleteProvinciaService;

await provinciasRepository.save(provincia);

return provincia;
