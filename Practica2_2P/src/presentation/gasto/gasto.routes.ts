import { Router } from 'express';
import { GastoController } from './gasto.controller';
import { PrismaGastoDatasource } from '../../infrastructure/datasource/gasto.datasource.impl';
import { GastoRepositoryImpl } from '../../infrastructure/repositories/gasto.repository.impl';

export class GastoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PrismaGastoDatasource();
    const gastoRepository = new GastoRepositoryImpl(datasource);
    const gastoController = new GastoController(gastoRepository);

    router.get('/', gastoController.getGastos);
    router.get('/:id', gastoController.getGastoById);
    router.post('/', gastoController.createGasto);
    router.put('/:id', gastoController.updateGasto);
    router.delete('/:id', gastoController.deleteGasto);

    return router;
  }
}
