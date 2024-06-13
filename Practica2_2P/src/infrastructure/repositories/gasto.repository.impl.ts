import { CreateGastoDto, GastoDatasource, GastoEntity, GastoRepository, UpdateGastoDto } from '../../domain';

export class GastoRepositoryImpl implements GastoRepository {

  constructor(
    private readonly datasource: GastoDatasource,
  ) { }

  create(createGastoDto: CreateGastoDto): Promise<GastoEntity> {
    return this.datasource.create(createGastoDto);
  }

  getAll(): Promise<GastoEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<GastoEntity | null> {
    return this.datasource.findById(id);
  }

  updateById(updateGastoDto: UpdateGastoDto): Promise<GastoEntity | null> {
    return this.datasource.updateById(updateGastoDto);
  }

  deleteById(id: number): Promise<boolean> {
    return this.datasource.deleteById(id);
  }

}
