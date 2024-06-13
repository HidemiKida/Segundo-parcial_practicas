import { prisma } from '../../data/postgres';
import { CreateGastoDto, GastoDatasource, GastoEntity, UpdateGastoDto } from '../../domain';


export class PrismaGastoDatasource implements GastoDatasource {

  async create(createGastoDto: CreateGastoDto): Promise<GastoEntity> {
    const gasto = await prisma.gasto.create({
      data: createGastoDto,
    });

    return GastoEntity.fromObject(gasto);
  }

  async getAll(): Promise<GastoEntity[]> {
    const gastos = await prisma.gasto.findMany();
    return gastos.map(gasto => GastoEntity.fromObject(gasto));
  }

  async findById(id: number): Promise<GastoEntity | null> {
    const gasto = await prisma.gasto.findUnique({
      where: { id },
    });

    return gasto ? GastoEntity.fromObject(gasto) : null;
  }

  async updateById(updateGastoDto: UpdateGastoDto): Promise<GastoEntity | null> {
    const { id, ...updateData } = updateGastoDto;

    await this.findById(id);

    const updatedGasto = await prisma.gasto.update({
      where: { id },
      data: updateData,
    });

    return GastoEntity.fromObject(updatedGasto);
  }

  async deleteById(id: number): Promise<boolean> {
    await this.findById(id);

    await prisma.gasto.delete({
      where: { id },
    });

    return true;
  }
}