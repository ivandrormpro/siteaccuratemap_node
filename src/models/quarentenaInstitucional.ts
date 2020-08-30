import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import SharedPropCuidadosMedicos from './sharedPropCuidadosMedicos.helpers';
import CentroQuarentena from './centroQuarentena';
import Utente from './utente';

@Entity('quarentenaInstitucional')
class QuarentenaInstitucional extends SharedPropCuidadosMedicos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'utente_id', nullable: false })
    utente_id: string;

    @ManyToOne(() => Utente)
    @JoinColumn({ name: 'utente_id' })
    utente: Utente;

    @Column({ name: 'centro_quarentena_id', nullable: false })
    centro_quarentena_id: string;

    @ManyToOne(() => CentroQuarentena)
    @JoinColumn({ name: 'centro_quarentena_id' })
    centroQuarentena: CentroQuarentena;
}

export default QuarentenaInstitucional;
