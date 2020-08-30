import { EntityRepository, Repository } from 'typeorm';
import Distrito from '../models/distrito';

@EntityRepository(Distrito)
class DistritosRepository extends Repository<Distrito> {}

export default DistritosRepository;
