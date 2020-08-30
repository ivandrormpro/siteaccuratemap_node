import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import SharedProp from './sharedProp.helpers';

@Entity('medicamentos')
class Medicamento extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'tipo_medicamento', unique: true, nullable: false })
    tipo_medicamento: string;

    @Column({ name: 'forma_administracao', unique: true, nullable: false })
    forma_administracao: string;
}

export default Medicamento;
