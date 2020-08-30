import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import SharedProp from './sharedProp.helpers';

@Entity('doencas')
class Doenca extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', unique: true, nullable: false })
    name: string;
}

export default Doenca;
