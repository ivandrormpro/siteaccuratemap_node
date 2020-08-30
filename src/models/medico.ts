import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import UnidadeHospitalar from './unidadeHospitalar';
import EspecialidadeMedica from './especialidadeMedica';
import Utente from './utente';

@Entity('medicos')
class Medico extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'unidade_hospitalar_id', nullable: false })
    unidade_hospitalar_id: string;

    @ManyToOne(
        () => UnidadeHospitalar,
        (unidadeHospitalar: UnidadeHospitalar) => unidadeHospitalar.enfermeiros,
    )
    @JoinColumn({ name: 'unidade_hospitalar_id' })
    unidadeHospitalar: UnidadeHospitalar;

    @ManyToOne(
        () => EspecialidadeMedica,
        (especialidadeMedica: EspecialidadeMedica) =>
            especialidadeMedica.medicos,
    )
    @JoinColumn({ name: 'especialidade_medica_id' })
    especialidadeMedica: EspecialidadeMedica;

    @OneToOne(() => Utente, utente => utente.paciente)
    @JoinColumn()
    utente: Utente;
}

export default Medico;
