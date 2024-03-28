"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
require("dotenv/config");
const login_routes_1 = __importDefault(require("../routes/login.routes"));
const calls_routes_1 = __importDefault(require("../routes/calls.routes"));
const user_1 = require("../models/user");
const calls_1 = require("./calls");
const contacts_1 = require("./contacts");
const participants_1 = require("./participants");
class Server {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000";
        this.server = http_1.default.createServer(this.app);
        this.setupDataBaseConnection();
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
    // manejo de la bd
    setupDataBaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_1.User.sync();
                yield calls_1.Call.sync();
                yield contacts_1.Contacts.sync();
                yield participants_1.Participats.sync();
            }
            catch (error) {
                console.error("Imposible conectarse a la base de datos: ", error);
            }
        });
    }
    // midlewares para la api
    setupMidlewares() {
        this.app.use(express_1.default.json());
    }
    // config de rutas
    setupRoutes() {
        this.app.use('/api/calls', calls_routes_1.default);
        this.app.use('/api/users', login_routes_1.default);
    }
    // inicio del backend
    start() {
        this.server.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
