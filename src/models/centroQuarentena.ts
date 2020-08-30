import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import SharedPropLocation from './sharedPropLocation.helpers';

@Entity('centrosQuarentena')
class CentroQuarentena extends SharedPropLocation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;
}

export default CentroQuarentena;
