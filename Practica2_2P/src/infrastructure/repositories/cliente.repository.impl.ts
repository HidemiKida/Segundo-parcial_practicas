import { CreateClienteDto, ClienteDatasource, ClienteEntity, ClienteRepository, UpdateClienteDto } from '../../domain';

export class ClienteRepositoryImpl implements ClienteRepository {

  constructor(
    private readonly datasource: ClienteDatasource,
  ) { }

  create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    return this.datasource.create(createClienteDto);
  }

  getAll(): Promise<ClienteEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<ClienteEntity | null> {
    return this.datasource.findById(id);
  }

  updateById(updateClienteDto: UpdateClienteDto): Promise<ClienteEntity | null> {
    return this.datasource.updateById(updateClienteDto);
  }

  deleteById(id: number): Promise<boolean> {
    return this.datasource.deleteById(id);
  }

}
