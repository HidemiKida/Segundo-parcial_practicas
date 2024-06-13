import { prisma } from '../../data/postgres';
import { Request, Response } from 'express';
import { CreateClienteDto, UpdateClienteDto } from '../../domain/dtos';
import { ClienteRepository } from '../../domain';

export class ClienteController {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  public getClientes = async (req: Request, res: Response) => {
    const clientes = await this.clienteRepository.getAll();
    return res.json(clientes);
  };

  public getClienteById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const cliente = await this.clienteRepository.findById(id);
      res.json(cliente);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createCliente = async (req: Request, res: Response) => {
    const [error, createClienteDto] = CreateClienteDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const cliente = await this.clienteRepository.create(createClienteDto!);
    res.json(cliente);
  };

  public updateCliente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateClienteDto] = UpdateClienteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedCliente = await this.clienteRepository.updateById(updateClienteDto!);
    return res.json(updatedCliente);
  };

  public deleteCliente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedCliente = await this.clienteRepository.deleteById(id);
    res.json(deletedCliente);
  };
}
