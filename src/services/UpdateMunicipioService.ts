/* eslint-disable no-param-reassign */
import { getRepository } from 'typeorm';
import Municipio from '../models/municipio';

interface Request {
    municipio: Municipio;
    name: string;
    provincia_id: string;
}

class UpdateMunicipioService {
    public async execute({
        municipio,
        name,
        provincia_id,
    }: Request): Promise<Municipio> {
        const municipiosRepository = getRepository(Municipio);

        municipio.name = name;
        municipio.provincia_id = provincia_id;

        await municipiosRepository.save(municipio);

        return municipio;
    }
}

export default UpdateMunicipioService;
