"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationCon_1 = require("../controllers/authenticationCon");
const router = (0, express_1.Router)();
router.post('/register', authenticationCon_1.registerUser); //  /user/register
router.post('/login', authenticationCon_1.loginUser); //  /user/register
exports.default = router;
