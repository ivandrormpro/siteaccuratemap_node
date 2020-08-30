import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
    OneToMany,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Utente from './utente';
import ExameMedico from './exameMedico';
import Medicacao from './medicacao';
import Distrito from './distrito';
import Medicamento from './medicamento';

@Entity('pacientes')
class Paciente extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name_acompanhanete', nullable: false })
    name_acompanhanete: string;

    @Column({ name: 'contacto_acompanhante', nullable: false })
    contacto_acompanhante: string;

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
}

export default Paciente;
