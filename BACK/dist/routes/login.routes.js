"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const router = (0, express_1.Router)();
// rutas login y register de usuarios
router.post('/register', login_controller_1.registerUser);
router.post('/login', login_controller_1.loginUser);
exports.default = router;
