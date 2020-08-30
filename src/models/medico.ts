import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import EspecialidadeMedica from './especialidadeMedica';
import SharedPropProfissional from './sharedPropProfissional.helpers';

@Entity('medicos')
class Medico extends SharedPropProfissional {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(
        () => EspecialidadeMedica,
        (especialidadeMedica: EspecialidadeMedica) =>
            especialidadeMedica.medicos,
    )
    @JoinColumn({ name: 'especialidade_medica_id' })
    especialidadeMedica: EspecialidadeMedica;
}

export default Medico;
