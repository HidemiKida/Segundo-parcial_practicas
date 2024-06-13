import { CreateConceptoDto, UpdateConceptoDto } from '../dtos';
import { ConceptoEntity } from '../entities/concepto.entity';

export abstract class ConceptoRepository {

  abstract create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity>;
  abstract getAll(): Promise<ConceptoEntity[]>;
  abstract findById(id: number): Promise<ConceptoEntity | null>;
  abstract updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity | null>;
  abstract deleteById(id: number): Promise<boolean>;

}
