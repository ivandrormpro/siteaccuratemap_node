import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import SharedProp from './sharedProp.helpers';
import Provincia from './provincia';
import Municipio from './municipio';
import Distrito from './distrito';
import Paciente from './paciente';
import Enfermeiro from './enfermeiro';
import Medico from './medico';

@Entity('utentes')
class Utente extends SharedProp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'apelido', nullable: false })
    apelido: string;

    @Column({ name: 'nacionalidade', nullable: false })
    nacionalidade: string;

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

    @OneToOne(() => Enfermeiro, enfermeiro => enfermeiro.utente)
    enfermeiro: Enfermeiro;

    @OneToOne(() => Medico, medico => medico.utente)
    medico: Medico;
}

export default Utente;
