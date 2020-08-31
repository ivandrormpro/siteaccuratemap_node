import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import SharedPropLocation from './sharedPropLocation.helpers';
import Distrito from './distrito';

@Entity('centrosQuarentena')
class CentroQuarentena extends SharedPropLocation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @Column({ name: 'capacidade', nullable: false })
    capacidade: number;
}

export default CentroQuarentena;
