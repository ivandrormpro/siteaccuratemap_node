import { ManyToOne, JoinColumn, Column, OneToOne } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import UnidadeHospitalar from './unidadeHospitalar';
import Utente from './utente';

export default class SharedPropProfissional extends SharedProp {
    @Column({ name: 'unidade_hospitalar_id', nullable: false })
    unidade_hospitalar_id: string;

    @ManyToOne(() => UnidadeHospitalar)
    @JoinColumn({ name: 'unidade_hospitalar_id' })
    unidadeHospitalar: UnidadeHospitalar;

    @OneToOne(() => Utente)
    @JoinColumn()
    utente: Utente;
}
