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
import Utente from './utente';

@Entity('enfermeiros')
class Enfermeiro extends SharedProp {
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

    @OneToOne(() => Utente, utente => utente.paciente)
    @JoinColumn()
    utente: Utente;
}

export default Enfermeiro;
