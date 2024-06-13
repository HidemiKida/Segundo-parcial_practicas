import express from 'express';
import compression from 'compression';
import path from 'path';
import { GeneralRoutes } from './routes';

interface Options {
  port: number;
  public_path?: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor(options: Options) {
    const { port, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
  }

  async start() {
    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
    this.app.use(compression());

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use('/api', GeneralRoutes.routes); // Asegúrate de que las rutas estén registradas bajo /api

    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
