import { ManyToOne, JoinColumn, Column } from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Municipio from './municipio';
import Provincia from './provincia';
import Distrito from './distrito';

export default class SharedPropLocation extends SharedProp {
    @Column({ name: 'municipio_id', nullable: false })
    municipio_id: string;

    @ManyToOne(() => Municipio)
    @JoinColumn({ name: 'municipio_id' })
    municipio: Municipio;

    @Column({ name: 'provincia_id', nullable: false })
    provincia_id: string;

    @ManyToOne(() => Provincia)
    @JoinColumn({ name: 'provincia_id' })
    provincia: Provincia;

    @Column({ name: 'distrito_id', nullable: false })
    distrito_id: string;

    @ManyToOne(() => Distrito)
    @JoinColumn({ name: 'distrito_id' })
    distrito: Distrito;
}
