import dotenv from 'dotenv';
dotenv.config(); // Cargar variables de entorno desde .env

import { envs } from './config/envs';
import { GeneralRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(async () => {
  await main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });

  server.start();
}
