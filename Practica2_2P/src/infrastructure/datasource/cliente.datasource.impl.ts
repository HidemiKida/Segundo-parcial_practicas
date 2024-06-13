import { prisma } from '../../data/postgres';
import { CreateClienteDto, ClienteDatasource, ClienteEntity, UpdateClienteDto } from '../../domain';


export class PrismaClienteDatasource implements ClienteDatasource {

  async create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    const cliente = await prisma.cliente.create({
      data: createClienteDto,
    });

    return ClienteEntity.fromObject(cliente);
  }

  async getAll(): Promise<ClienteEntity[]> {
    const clientes = await prisma.cliente.findMany();
    return clientes.map(cliente => ClienteEntity.fromObject(cliente));
  }

  async findById(id: number): Promise<ClienteEntity | null> {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });

    return cliente ? ClienteEntity.fromObject(cliente) : null;
  }

  async updateById(updateClienteDto: UpdateClienteDto): Promise<ClienteEntity | null> {
    const { id, ...updateData } = updateClienteDto;

    await this.findById(id);

    const updatedCliente = await prisma.cliente.update({
      where: { id },
      data: updateData,
    });

    return ClienteEntity.fromObject(updatedCliente);
  }

  async deleteById(id: number): Promise<boolean> {
    await this.findById(id);

    await prisma.cliente.delete({
      where: { id },
    });

    return true;
  }
}
