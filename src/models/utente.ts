import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import Paciente from './paciente';
import Pais from './pais';
import SharedPropLocation from './sharedPropLocation.helpers';

@Entity('utentes')
class Utente extends SharedPropLocation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'apelido', nullable: false })
    apelido: string;

    @Column({ name: 'nacionalidade_id', nullable: false })
    nacionalidade_id: string;

    @ManyToOne(() => Pais)
    @JoinColumn({ name: 'nacionalidade_id' })
    nacionalidade: Pais;

    @Column({ name: 'tipo_identificacao', nullable: false })
    tipo_identificacao: string;

    @Column({ name: 'numero_identificacao', unique: true, nullable: false })
    numero_identificacao: string;

    @Column({ name: 'sexo', nullable: false })
    sexo: string;

    @Column({ name: 'estado_civil', nullable: false })
    estado_civil: string;

    @Column({ name: 'data_nascimento', nullable: false })
    data_nascimento: Date;

    @Column({ name: 'contacto_principal', nullable: false })
    contacto_principal: string;

    @Column({ name: 'contacto_secundario', nullable: false })
    contacto_secundario: string;

    @Column({ name: 'morada', nullable: false })
    morada: string;

    @Column({ name: 'photo', nullable: false })
    photo: string;

    @OneToOne(() => Paciente, paciente => paciente.utente)
    paciente: Paciente;
}

export default Utente;
