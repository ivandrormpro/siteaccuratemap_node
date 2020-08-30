import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import EspecialidadeMedica from './especialidadeMedica';
import TipoExameMedico from './tipoExameMedico';

@Entity('especialidadesMedicasTotiposExamesMedicos')
class EspecialidadeMedicaTotipoExameMedico extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(
        () => EspecialidadeMedica,
        (especialidadeMedica: EspecialidadeMedica) =>
            especialidadeMedica.especialidadesMedicasTotiposExamesMedicos,
    )
    especialidadeMedica: EspecialidadeMedica;

    @ManyToOne(
        () => TipoExameMedico,
        (tipoExameMedico: TipoExameMedico) =>
            tipoExameMedico.especialidadesMedicasTotiposExamesMedicos,
    )
    tipoExameMedico: TipoExameMedico;
}

export default EspecialidadeMedicaTotipoExameMedico;
