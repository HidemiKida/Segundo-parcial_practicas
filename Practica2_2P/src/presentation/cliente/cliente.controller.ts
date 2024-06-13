import { Request, Response } from 'express';
import { CreateClienteDto, UpdateClienteDto } from '../../domain/dtos';
import { ClienteRepository } from '../../domain';

export class ClienteController {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  public getClientes = async (req: Request, res: Response) => {
    try {
      const clientes = await this.clienteRepository.getAll();
      res.json(clientes);
    } catch (error) {
      res.status(400).json({ error });
    }
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

    try {
      const cliente = await this.clienteRepository.create(createClienteDto!);
      res.json(cliente);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public updateCliente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateClienteDto] = UpdateClienteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    try {
      const updatedCliente = await this.clienteRepository.updateById(updateClienteDto!);
      res.json(updatedCliente);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public deleteCliente = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const deletedCliente = await this.clienteRepository.deleteById(id);
      res.json(deletedCliente);
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
