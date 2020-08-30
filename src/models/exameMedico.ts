import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import TipoExameMedico from './tipoExameMedico';
import Enfermeiro from './enfermeiro';
import ResultadoExame from './resultadoExame';
import SharedPropProfissional from './sharedPropProfissional.helpers';

@Entity('examesMedicos')
class ExameMedico extends SharedPropProfissional {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'tipo_exame_id', nullable: false })
    tipo_exame_id: string;

    @ManyToOne(() => TipoExameMedico)
    @JoinColumn({ name: 'tipo_exame_id' })
    tipoExameMedico: TipoExameMedico;

    @Column({ name: 'enfermeiro_id', nullable: false })
    enfermeiro_id: string;

    @ManyToOne(() => Enfermeiro)
    @JoinColumn({ name: 'enfermeiro_id' })
    enfermeiro: Enfermeiro;

    @Column({ name: 'resultado_id', nullable: false })
    resultado_id: string;

    @ManyToOne(() => ResultadoExame)
    @JoinColumn({ name: 'resultado_id' })
    resultado: ResultadoExame;

    @Column({ name: 'data_exame', nullable: false })
    data_exame: Date;

    @Column({ name: 'comentarios', nullable: false })
    comentarios: string;
}

export default ExameMedico;
