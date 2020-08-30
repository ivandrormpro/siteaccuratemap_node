import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import SharedPropCuidadosMedicos from './sharedPropCuidadosMedicos.helpers';
import Utente from './utente';

@Entity('quarentenaDomiciliar')
class QuarentenaDomiciliar extends SharedPropCuidadosMedicos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'utente_id', nullable: false })
    utente_id: string;

    @ManyToOne(() => Utente)
    @JoinColumn({ name: 'utente_id' })
    utente: Utente;

    @Column({ name: 'endereco_domicilio', nullable: false })
    endereco_domicilio: string;

    @Column({ name: 'violou_quarentena', nullable: false })
    violou_quarentena: string;
}

export default QuarentenaDomiciliar;
