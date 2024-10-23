"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationCon_1 = require("../controllers/authenticationCon");
const authenticationMid_1 = require("../middlewares/authenticationMid");
const router = (0, express_1.Router)();
router.post('/register', authenticationCon_1.registerUser); //      /user/register
router.post('/login', authenticationCon_1.loginUser); //      /user/register
router.post('/refresh-token', authenticationCon_1.refreshToken); //      /user/refresh-token
// Example protected route
router.get('/protected', authenticationMid_1.authenticateToken, (req, res) => {
    res.json({ message: 'You are authenticated!' });
});
exports.default = router;
