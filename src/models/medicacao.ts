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
import Medicamento from './medicamento';

@Entity('medicacoes')
class Medicacao extends SharedProp {
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

    @Column({ name: 'medicamento_id', nullable: false })
    medicamento_id: string;

    @ManyToOne(() => Medicamento)
    @JoinColumn({ name: 'medicamento_id' })
    medicamento: Medicamento;

    @Column({ name: 'dosagem', nullable: false })
    dosagem: string;

    @Column({ name: 'data_inicio', nullable: false })
    data_inicio: Date;

    @Column({ name: 'data_fim', nullable: false })
    data_fim: Date;

    @Column({ name: 'observacoes', nullable: false })
    comentarios: string;
}

export default Medicacao;
