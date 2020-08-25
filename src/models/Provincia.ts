import { v4 as uuidv4 } from 'uuid';

class Provincia {
    id: string;

    name: string;

    constructor({ name }: Omit<Provincia, 'id'>) {
        this.id = uuidv4();
        this.name = name;
    }
}

export default Provincia;
