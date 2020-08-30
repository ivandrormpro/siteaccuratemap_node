import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import Medicamento from './medicamento';
import SharedPropExameMedicacao from './sharedPropExameMedicacao.helpers';

@Entity('medicacoes')
class Medicacao extends SharedPropExameMedicacao {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'medicamento_id', nullable: false })
    medicamento_id: string;

    @ManyToOne(() => Medicamento)
    @JoinColumn({ name: 'medicamento_id' })
    medicamento: Medicamento;

    @Column({ name: 'dosagem', nullable: false })
    dosagem: string;

    @Column({ name: 'data_inicio', nullable: false })
    data_inicio: Date;

    @Column({ name: 'data_fim', nullable: false })
    data_fim: Date;

    @Column({ name: 'observacoes', nullable: false })
    comentarios: string;
}

export default Medicacao;
