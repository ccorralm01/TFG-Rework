"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const registerUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "New User",
        body
    });
};
exports.registerUser = registerUser;
const loginUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Login User",
        body
    });
};
exports.loginUser = loginUser;
