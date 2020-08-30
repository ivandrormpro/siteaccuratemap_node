import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Paciente from './paciente';
import Medico from './medico';
import UnidadeHospitalar from './unidadeHospitalar';
import Enfermeiro from './enfermeiro';
import AreaInternamento from './areaInternamento';

@Entity('quarentena')
class Quarentena extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'paciente_id', nullable: false })
    paciente_id: string;

    @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.medicacoes)
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente;

    @Column({ name: 'medico_id', nullable: false })
    medico_id: string;

    @ManyToOne(() => Medico)
    @JoinColumn({ name: 'medico_id' })
    medico: Medico;

    @Column({ name: 'enfermeiro_id', nullable: false })
    enfermeiro_id: string;

    @ManyToOne(() => Enfermeiro)
    @JoinColumn({ name: 'enfermeiro_id' })
    enfermeiro: Enfermeiro;

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

    @Column({ name: 'data_entrada', nullable: false })
    data_entrada: Date;

    @Column({ name: 'alta_medica', nullable: false })
    alta_medica: string;

    @Column({ name: 'data_saida', nullable: false })
    data_saida: Date;

    @Column({ name: 'observacoes', nullable: false })
    observacoes: string;
}

export default Quarentena;
