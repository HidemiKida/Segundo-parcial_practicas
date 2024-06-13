import { CreateGastoDto, UpdateGastoDto } from '../dtos';
import {GastoEntity } from '../entities/gasto.entity';

export abstract class GastoRepository {

  abstract create(createConceptoDto: CreateGastoDto): Promise<GastoEntity>;
  abstract getAll(): Promise<GastoEntity[]>;
  abstract findById(id: number): Promise<GastoEntity| null>;
  abstract updateById(UpdateGastoDto: UpdateGastoDto): Promise<GastoEntity | null>;
  abstract deleteById(id: number): Promise<boolean>;

}
