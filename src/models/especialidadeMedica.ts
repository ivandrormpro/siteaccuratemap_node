import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import EspecialidadeMedicaTotipoExameMedico from './especialidadeMedicaTotipoExameMedico';
import Medico from './medico';

@Entity('especialidadesMedicas')
class EspecialidadeMedica extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @OneToMany(
        'EspecialidadeMedicaTotipoExameMedico',
        (
            especialidadeMedicaTotipoExameMedico: EspecialidadeMedicaTotipoExameMedico,
        ) => especialidadeMedicaTotipoExameMedico.especialidadeMedica,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    especialidadesMedicasTotiposExamesMedicos: Array<
        EspecialidadeMedicaTotipoExameMedico
    >;

    @OneToMany('Medico', (medico: Medico) => medico.especialidadeMedica, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    medicos: Array<Medico>;
}

export default EspecialidadeMedica;
