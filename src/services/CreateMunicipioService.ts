import { getRepository } from 'typeorm';
import Municipio from '../models/municipio';

interface Request {
    name: string;
    provincia_id: string;
}

class CreateMunicipioService {
    public async execute({ name, provincia_id }: Request): Promise<Municipio> {
        const municipiosRepository = getRepository(Municipio);

        const municipio = municipiosRepository.create({
            name,
            provincia_id,
        });

        await municipiosRepository.save(municipio);

        return municipio;
    }
}

export default CreateMunicipioService;
