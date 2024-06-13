import { Router } from 'express';
import { ClienteRoutes } from './cliente/cliente.routes';
import { ConceptoRoutes } from './concepto/concepto.routes';
import { GastoRoutes } from './gasto/gasto.routes';
import { getRepos } from './githubController'; // Ajusta la ruta según tu estructura


export class GeneralRoutes {
  static get routes(): Router {
    const router = Router();

    // Rutas para la entidad Cliente
    router.use('/clientes', ClienteRoutes.routes);

    // Rutas para la entidad Concepto
    router.use('/conceptos', ConceptoRoutes.routes);

    // Rutas para la entidad Gasto
    router.use('/gastos', GastoRoutes.routes);

    router.get('/github/repos', getRepos);

    return router;
  }
}
