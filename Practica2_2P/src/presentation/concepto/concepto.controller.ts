import { Request, Response } from 'express';
import { CreateConceptoDto, UpdateConceptoDto } from '../../domain/dtos';
import { ConceptoRepository } from '../../domain';

export class ConceptoController {
  constructor(private readonly conceptoRepository: ConceptoRepository) {}

  public getConceptos = async (req: Request, res: Response) => {
    try {
      const conceptos = await this.conceptoRepository.getAll();
      res.json(conceptos);
    } catch (error) {
      res.status(400).json({ error });
    }
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

    try {
      const concepto = await this.conceptoRepository.create(createConceptoDto!);
      res.json(concepto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public updateConcepto = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateConceptoDto] = UpdateConceptoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    try {
      const updatedConcepto = await this.conceptoRepository.updateById(updateConceptoDto!);
      res.json(updatedConcepto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public deleteConcepto = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const deletedConcepto = await this.conceptoRepository.deleteById(id);
      res.json(deletedConcepto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
