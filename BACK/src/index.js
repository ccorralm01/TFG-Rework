import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.server = http.createServer(this.app);

        this.setupSocket();
        this.setupRoutes();
    }

    setupSocket() {
        this.io = new SocketIOServer(this.server);
        this.io.on('connection', (socket) => {
            console.log('Un cliente se ha conectado.');

            // Manejar eventos aquí
            socket.on('disconnect', () => {
                console.log('Cliente desconectado.');
            });
        });
    }

    setupRoutes() {
        this.app.get('/', (req, res) => {
            res.send('¡Hola mundo!');
        });
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}

// Crear instancia del servidor y empezar a escuchar
const server = new Server();
server.start();
