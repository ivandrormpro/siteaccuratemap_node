import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Paciente from './paciente';
import Doenca from './doenca';

@Entity('pacientesToDoencas')
class PacienteToDoenca extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(
        () => Paciente,
        (paciente: Paciente) => paciente.pacienteToDoenca,
    )
    paciente: Paciente;

    @ManyToOne(() => Doenca, (doenca: Doenca) => doenca.pacienteToDoenca)
    doenca: Doenca;
}

export default PacienteToDoenca;
