import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Provincia from './provincia';
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

    @Column({ name: 'provincia_id', nullable: false })
    provincia_id: string;

    @ManyToOne(() => Provincia, (provincia: Provincia) => provincia.distritos)
    @JoinColumn({ name: 'provincia_id' })
    provincia: Provincia;
}

export default Distrito;
