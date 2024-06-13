import { prisma } from '../../data/postgres';
import { CreateConceptoDto, ConceptoDatasource, ConceptoEntity, UpdateConceptoDto } from '../../domain';

export class PrismaConceptoDatasource implements ConceptoDatasource {

  async create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
    const concepto = await prisma.concepto.create({
      data: createConceptoDto,
    });

    return ConceptoEntity.fromObject(concepto);
  }

  async getAll(): Promise<ConceptoEntity[]> {
    const conceptos = await prisma.concepto.findMany();
    return conceptos.map(concepto => ConceptoEntity.fromObject(concepto));
  }

  async findById(id: number): Promise<ConceptoEntity | null> {
    const concepto = await prisma.concepto.findUnique({
      where: { id },
    });

    return concepto ? ConceptoEntity.fromObject(concepto) : null;
  }

  async updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity | null> {
    const { id, ...updateData } = updateConceptoDto;

    await this.findById(id);

    const updatedConcepto = await prisma.concepto.update({
      where: { id },
      data: updateData,
    });

    return ConceptoEntity.fromObject(updatedConcepto);
  }

  async deleteById(id: number): Promise<boolean> {
    await this.findById(id);

    await prisma.concepto.delete({
      where: { id },
    });

    return true;
  }
}
