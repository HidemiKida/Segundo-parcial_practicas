import { Request, Response } from 'express';
import { CreateGastoDto, UpdateGastoDto } from '../../domain/dtos';
import { GastoRepository } from '../../domain';

export class GastoController {
  constructor(private readonly gastoRepository: GastoRepository) {}

  public getGastos = async (req: Request, res: Response) => {
    try {
      const gastos = await this.gastoRepository.getAll();
      res.json(gastos);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public getGastoById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const gasto = await this.gastoRepository.findById(id);
      res.json(gasto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createGasto = async (req: Request, res: Response) => {
    const [error, createGastoDto] = CreateGastoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      const gasto = await this.gastoRepository.create(createGastoDto!);
      res.json(gasto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public updateGasto = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateGastoDto] = UpdateGastoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    try {
      const updatedGasto = await this.gastoRepository.updateById(updateGastoDto!);
      res.json(updatedGasto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public deleteGasto = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const deletedGasto = await this.gastoRepository.deleteById(id);
      res.json(deletedGasto);
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
