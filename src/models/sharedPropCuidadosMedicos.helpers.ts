import { ManyToOne, JoinColumn, Column } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Medico from './medico';
import Enfermeiro from './enfermeiro';

export default class SharedPropCuidadosMedicos extends SharedProp {
    @Column({ name: 'medico_id', nullable: false })
    medico_id: string;

    @ManyToOne(() => Medico)
    @JoinColumn({ name: 'medico_id' })
    medico: Medico;

    @Column({ name: 'enfermeiro_id', nullable: false })
    enfermeiro_id: string;

    @ManyToOne(() => Enfermeiro)
    @JoinColumn({ name: 'enfermeiro_id' })
    enfermeiro: Enfermeiro;

    @Column({ name: 'data_entrada', nullable: false })
    data_entrada: Date;

    @Column({ name: 'data_saida', nullable: false })
    data_saida: Date;

    @Column({ name: 'alta_medica', nullable: false })
    alta_medica: string;

    @Column({ name: 'observacoes', nullable: false })
    observacoes: string;
}
