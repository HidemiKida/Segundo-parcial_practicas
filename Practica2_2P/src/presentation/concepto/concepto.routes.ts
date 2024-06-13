import { Router } from 'express';
import { ConceptoController } from './concepto.controller';
import { PrismaConceptoDatasource } from '../../infrastructure/datasource/concepto.datasource.impl';
import { ConceptoRepositoryImpl } from '../../infrastructure/repositories/concepto.repository.impl';

export class ConceptoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PrismaConceptoDatasource();
    const conceptoRepository = new ConceptoRepositoryImpl(datasource);
    const conceptoController = new ConceptoController(conceptoRepository);

    router.get('/', conceptoController.getConceptos);
    router.get('/:id', conceptoController.getConceptoById);
    router.post('/', conceptoController.createConcepto);
    router.put('/:id', conceptoController.updateConcepto);
    router.delete('/:id', conceptoController.deleteConcepto);

    return router;
  }
}
