import express, { Express, Request, Response } from 'express';
import http, { Server as HTTPServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import 'dotenv/config'

import routesUser from '../routes/login.routes'
import routesCalls from '../routes/calls.routes'

import { User } from '../models/user';
import { Call } from './calls';
import { Contacts } from './contacts';
import { Participats } from './participants';

class Server {
    private app: Express;
    private port: string;
    private server: HTTPServer;
    private io!: SocketIOServer;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ?? "3000";
        this.server = http.createServer(this.app);

        this.setupDataBaseConnection();
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

    // manejo de la bd
    private async setupDataBaseConnection(){
        try {
            
            await User.sync();
            await Call.sync();
            await Contacts.sync();
            await Participats.sync();

        } catch (error) {
            console.error("Imposible conectarse a la base de datos: ", error);
        }
    }

    // midlewares para la api
    private setupMidlewares(): void{
        this.app.use(express.json());
    }

    // config de rutas
    private setupRoutes(): void {
        this.app.use('/api/calls', routesCalls);
        this.app.use('/api/users', routesUser);
    }

    // inicio del backend
    public start(): void {
        this.server.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}

export default Server