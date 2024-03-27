import express, { Express, Request, Response } from 'express';
import http, { Server as HTTPServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

import routesUser from '../routes/login.routes'

class Server {
    private app: Express;
    private port: string;
    private server: HTTPServer;
    private io!: SocketIOServer;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ?? "3000";
        this.server = http.createServer(this.app);

        this.setupSocket();
        this.setupMidlewares();
        this.setupRoutes();
    }

    private setupSocket(): void {
        this.io = new SocketIOServer(this.server);
        this.io.on('connection', (socket: Socket) => {
            console.log('Un cliente se ha conectado.');

            // Manejar eventos aquí
            socket.on('disconnect', () => {
                console.log('Cliente desconectado.');
            });
        });
    }

    private setupMidlewares(): void{
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('¡Hola mundo!');
        });

        this.app.use('/api/users', routesUser);
    }

    public start(): void {
        this.server.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}

export default Server