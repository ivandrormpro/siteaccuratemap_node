import { ManyToOne, JoinColumn, Column } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Distrito from './distrito';

export default class SharedPropLocation extends SharedProp {
    @Column({ name: 'distrito_id', nullable: false })
    distrito_id: string;

    @ManyToOne(() => Distrito)
    @JoinColumn({ name: 'distrito_id' })
    distrito: Distrito;
}
