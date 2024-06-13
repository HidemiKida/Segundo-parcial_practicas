import { Router } from 'express';
import { ClienteController } from './cliente.controller';
import { PrismaClienteDatasource } from '../../infrastructure/datasource/cliente.datasource.impl';
import { ClienteRepositoryImpl } from '../../infrastructure/repositories/cliente.repository.impl';

export class ClienteRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PrismaClienteDatasource();
    const clienteRepository = new ClienteRepositoryImpl(datasource);
    const clienteController = new ClienteController(clienteRepository);

    router.get('/', clienteController.getClientes);
    router.get('/:id', clienteController.getClienteById);
    router.post('/', clienteController.createCliente);
    router.put('/:id', clienteController.updateCliente);
    router.delete('/:id', clienteController.deleteCliente);

    return router;
  }
}
