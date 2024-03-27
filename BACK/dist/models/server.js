"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const login_routes_1 = __importDefault(require("../routes/login.routes"));
class Server {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000";
        this.server = http_1.default.createServer(this.app);
        this.setupSocket();
        this.setupMidlewares();
        this.setupRoutes();
    }
    setupSocket() {
        this.io = new socket_io_1.Server(this.server);
        this.io.on('connection', (socket) => {
            console.log('Un cliente se ha conectado.');
            // Manejar eventos aquí
            socket.on('disconnect', () => {
                console.log('Cliente desconectado.');
            });
        });
    }
    setupMidlewares() {
        this.app.use(express_1.default.json());
    }
    setupRoutes() {
        this.app.get('/', (req, res) => {
            res.send('¡Hola mundo!');
        });
        this.app.use('/api/users', login_routes_1.default);
    }
    start() {
        this.server.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
