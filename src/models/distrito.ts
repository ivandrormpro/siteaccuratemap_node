import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Municipio from './municipio';

@Entity('distritos')
class Distrito extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @Column({ name: 'municipio_id', nullable: false })
    municipio_id: string;

    @ManyToOne(() => Municipio, (municipio: Municipio) => municipio.distritos)
    @JoinColumn({ name: 'municipio_id' })
    municipio: Municipio;
}

export default Distrito;
