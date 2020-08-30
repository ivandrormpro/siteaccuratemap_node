import { EntityRepository, Repository } from 'typeorm';
import Municipio from '../models/municipio';

@EntityRepository(Municipio)
class MunicipiosRepository extends Repository<Municipio> {}

export default MunicipiosRepository;
