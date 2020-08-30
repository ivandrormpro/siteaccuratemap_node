import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Enfermeiro from './enfermeiro';
import SharedPropLocation from './sharedPropLocation.helpers';

@Entity('unidadesHospitalares')
class UnidadeHospitalar extends SharedPropLocation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @OneToMany(
        'Enfermeiro',
        (enfermeiro: Enfermeiro) => enfermeiro.unidadeHospitalar,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    enfermeiros: Array<Enfermeiro>;
}

export default UnidadeHospitalar;
