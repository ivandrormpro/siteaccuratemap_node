import { EntityRepository, Repository } from 'typeorm';
import Provincia from '../models/provincia';

@EntityRepository(Provincia)
class ProvinciasRepository extends Repository<Provincia> {}

export default ProvinciasRepository;
