import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Enfermeiro from './enfermeiro';
import SharedPropLocation from './sharedPropLocation.helpers';
import Distrito from './distrito';
import Medico from './medico';

@Entity('unidadesHospitalares')
class UnidadeHospitalar extends SharedPropLocation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @Column({ name: 'capacidade', nullable: false })
    capacidade: number;

    @OneToMany(
        'Enfermeiro',
        (enfermeiro: Enfermeiro) => enfermeiro.unidadeHospitalar,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    enfermeiros: Array<Enfermeiro>;

    @OneToMany('Medico', (medico: Medico) => medico.unidadeHospitalar, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    medicos: Array<Medico>;
}

export default UnidadeHospitalar;
