import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Municipio from './municipio';
import Distrito from './distrito';

@Entity('provincias')
class Provincia extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @OneToMany('Municipio', (municipio: Municipio) => municipio.provincia, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    municipios: Array<Provincia>;

    @OneToMany('Distrito', (distrito: Distrito) => distrito.municipio, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    distritos: Array<Provincia>;
}

export default Provincia;
