import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Provincia from './provincia';
import Distrito from './distrito';

@Entity('municipios')
class Municipio extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @Column({ name: 'provincia_id', nullable: false })
    provincia_id: string;

    @ManyToOne(() => Provincia, (provincia: Provincia) => provincia.municipios)
    @JoinColumn({ name: 'provincia_id' })
    provincia: Provincia;

    @OneToMany('Distrito', (distrito: Distrito) => distrito.municipio, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    distritos: Array<Distrito>;
}

export default Municipio;
