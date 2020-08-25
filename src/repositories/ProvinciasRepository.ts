import Provincia from '../models/Provincia';

interface CreateProvinciaDTO {
    name: string;
}

class ProvinciasRepository {
    private provincias: Provincia[];

    constructor() {
        this.provincias = [];
    }

    public create({ name }: CreateProvinciaDTO): Provincia {
        const provincia = new Provincia({ name });
        this.provincias.push(provincia);
        return provincia;
    }

    public all(): Provincia[] {
        return this.provincias;
    }
}

export default ProvinciasRepository;
