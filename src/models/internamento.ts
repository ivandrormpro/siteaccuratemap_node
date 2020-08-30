import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import UnidadeHospitalar from './unidadeHospitalar';
import AreaInternamento from './areaInternamento';
import SharedPropCuidadosMedicos from './sharedPropCuidadosMedicos.helpers';
import Paciente from './paciente';

@Entity('internamentos')
class Internamento extends SharedPropCuidadosMedicos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'paciente_id', nullable: false })
    paciente_id: string;

    @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.medicacoes)
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente;

    @Column({ name: 'unidade_hospitalar_id', nullable: false })
    unidade_hospitalar_id: string;

    @ManyToOne(() => UnidadeHospitalar)
    @JoinColumn({ name: 'unidade_hospitalar_id' })
    unidadeHospitalar: UnidadeHospitalar;

    @Column({ name: 'area_internamento_id', nullable: false })
    area_internamento_id: string;

    @ManyToOne(() => AreaInternamento)
    @JoinColumn({ name: 'area_internamento_id' })
    areaInternamento: AreaInternamento;

    @Column({ name: 'numero_cama', nullable: false })
    numero_cama: string;
}

export default Internamento;
