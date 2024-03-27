"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
// Crear instancia del servidor y empezar a escuchar
const server = new server_1.default();
server.start();
// TODO min 39:13
