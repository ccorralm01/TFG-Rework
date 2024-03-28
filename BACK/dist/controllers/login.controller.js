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
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    // Validacion si el usuario o el email ya existen
    const user = yield user_1.User.findOne({ where: { username: username } });
    const mail = yield user_1.User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({
            msg: `El usuario ${username} ya tiene una cuenta asociada`
        });
    }
    else if (mail) {
        return res.status(400).json({
            msg: `El email ${mail} ya tiene una cuenta asociada`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // creación de usuario
        yield user_1.User.create({
            username: username,
            email: email,
            password: hashedPassword
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error", error
        });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // email existe?
    const mail = yield user_1.User.findOne({ where: { email: email } });
    if (!mail) {
        return res.status(400).json({
            msg: `El usuario o la contraseña no son correctos`
        });
    }
    // Password correcta?
    const passwordValid = yield bcrypt_1.default.compare(password, mail.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `El usuario o la contraseña no son correctos`
        });
    }
    // token expira en 900000 (15min)
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRET_KEY || 'contraseña', {
        expiresIn: '900000'
    });
    res.json(token);
});
exports.loginUser = loginUser;
