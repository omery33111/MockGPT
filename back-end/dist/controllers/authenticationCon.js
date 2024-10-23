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
exports.refreshToken = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const tokenUtils_1 = require("../utils/tokenUtils");
const saltRounds = 10;
// Register a new user
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Check if email is already registered
        const existingUser = yield User_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'Email is already in use' });
            return;
        }
        // Hash the password
        const hashedPassword = yield bcryptjs_1.default.hash(password, saltRounds);
        // Save the new user
        const newUser = new User_1.default({ email, password: hashedPassword });
        yield newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
});
exports.registerUser = registerUser;
// Login user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }
        const accessToken = (0, tokenUtils_1.generateAccessToken)(user);
        const refreshToken = (0, tokenUtils_1.generateRefreshToken)(user);
        // Save refreshToken
        user.refreshToken = refreshToken;
        yield user.save();
        res.json({ accessToken, refreshToken });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in user' });
    }
});
exports.loginUser = loginUser;
// Refresh token logic
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.body;
    try {
        const decoded = yield (0, tokenUtils_1.verifyToken)(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
        const user = yield User_1.default.findById(decoded.userId);
        if (!user || user.refreshToken !== refreshToken) {
            res.status(403).json({ message: 'Invalid refresh token' });
            return;
        }
        // If refreshToken is expired, issue a new one
        const newAccessToken = (0, tokenUtils_1.generateAccessToken)(user);
        res.json({ accessToken: newAccessToken });
    }
    catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
});
exports.refreshToken = refreshToken;
