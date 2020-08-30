import { ManyToOne, JoinColumn, Column } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Paciente from './paciente';
import Medico from './medico';

export default class SharedPropExameMedicacao extends SharedProp {
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
}
