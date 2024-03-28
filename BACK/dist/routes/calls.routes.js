"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calls_controller_1 = require("../controllers/calls.controller");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
// rutas login y register de usuarios
router.post('/', validate_token_1.default, calls_controller_1.getCalls);
exports.default = router;
