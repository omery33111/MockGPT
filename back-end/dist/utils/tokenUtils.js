"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessTokenSecret = process.env.JWT_ACCESS_SECRET_KEY;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET_KEY;
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ userId: user._id }, accessTokenSecret, { expiresIn: '15m' });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    return jsonwebtoken_1.default.sign({ userId: user._id }, refreshTokenSecret, { expiresIn: '7d' });
};
exports.generateRefreshToken = generateRefreshToken;
