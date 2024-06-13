import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateConceptoDto, UpdateConceptoDto } from '../../domain/dtos';
import { ConceptoRepository } from '../../domain';

export class ConceptoController {
  constructor(private readonly conceptoRepository: ConceptoRepository) {}

  public getConceptos = async (req: Request, res: Response) => {
    const conceptos = await this.conceptoRepository.getAll();
    return res.json(conceptos);
  };

  public getConceptoById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const concepto = await this.conceptoRepository.findById(id);
      res.json(concepto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createConcepto = async (req: Request, res: Response) => {
    const [error, createConceptoDto] = CreateConceptoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const concepto = await this.conceptoRepository.create(createConceptoDto!);
    res.json(concepto);
  };

  public updateConcepto = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateConceptoDto] = UpdateConceptoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedConcepto = await this.conceptoRepository.updateById(updateConceptoDto!);
    return res.json(updatedConcepto);
  };

  public deleteConcepto = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedConcepto = await this.conceptoRepository.deleteById(id);
    res.json(deletedConcepto);
  };
}
