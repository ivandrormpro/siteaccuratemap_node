import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import PacienteToDoenca from './pacienteToDoenca';

@Entity('doencas')
class Doenca extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @OneToMany(
        'PacienteToDoenca',
        (pacienteToDoenca: PacienteToDoenca) => pacienteToDoenca.paciente,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    pacienteToDoenca: Array<PacienteToDoenca>;
}

export default Doenca;
