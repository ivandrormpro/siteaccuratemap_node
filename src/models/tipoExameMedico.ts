import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import EspecialidadeMedicaTotipoExameMedico from './especialidadeMedicaTotipoExameMedico';

@Entity('tiposExamesMedicos')
class TipoExameMedico extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;

    @OneToMany(
        'EspecialidadeMedicaTotipoExameMedico',
        (
            especialidadeMedicaTotipoExameMedico: EspecialidadeMedicaTotipoExameMedico,
        ) => especialidadeMedicaTotipoExameMedico.tipoExameMedico,
        {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    especialidadesMedicasTotiposExamesMedicos: Array<
        EspecialidadeMedicaTotipoExameMedico
    >;
}

export default TipoExameMedico;
