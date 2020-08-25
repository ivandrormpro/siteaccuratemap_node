import Provincia from '../models/Provincia';
import ProvinciasRepository from '../repositories/ProvinciasRepository';

interface Request {
    name: string;
}

class CreateProvinciaService {
    private provinciasRepository: ProvinciasRepository;

    constructor(provinciasRepository: ProvinciasRepository) {
        this.provinciasRepository = provinciasRepository;
    }

    public execute({ name }: Request): Provincia {
        const provincia = this.provinciasRepository.create({
            name,
        });
        return provincia;
    }
}

export default CreateProvinciaService;
