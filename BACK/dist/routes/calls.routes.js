"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calls_controller_1 = require("../controllers/calls.controller");
const router = (0, express_1.Router)();
// rutas login y register de usuarios
router.post('/', calls_controller_1.getCalls);
exports.default = router;
