import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import SharedPropProfissional from './sharedPropProfissional.helpers';

@Entity('enfermeiros')
class Enfermeiro extends SharedPropProfissional {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}

export default Enfermeiro;
