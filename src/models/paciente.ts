import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Utente from './utente';
import ExameMedico from './exameMedico';
import Medicacao from './medicacao';
import EstadoPaciente from './estadoPaciente';
import PacienteToDoenca from './pacienteToDoenca';

@Entity('pacientes')
class Paciente extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name_acompanhanete', nullable: false })
    name_acompanhanete: string;

    @Column({ name: 'contacto_acompanhante', nullable: false })
    contacto_acompanhante: string;

    @Column({ name: 'estado_id', nullable: false })
    estado_id: string;

    @ManyToOne(() => EstadoPaciente)
    @JoinColumn({ name: 'estado_id' })
    estadoPaciente: EstadoPaciente;

    @OneToOne(() => Utente, utente => utente.paciente)
    @JoinColumn()
    utente: Utente;

    @OneToMany(
        'ExameMedico',
        (exameMedico: ExameMedico) => exameMedico.paciente,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    exames: Array<ExameMedico>;

    @OneToMany('Medicacao', (medicacao: Medicacao) => medicacao.paciente, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    medicacoes: Array<Medicacao>;

    @OneToMany(
        'PacienteToDoenca',
        (pacienteToDoenca: PacienteToDoenca) => pacienteToDoenca.doenca,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    pacienteToDoenca: Array<PacienteToDoenca>;
}

export default Paciente;
