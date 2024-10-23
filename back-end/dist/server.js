"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./config/dbConfig");
const authenticationRoutes_1 = __importDefault(require("./routes/authenticationRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 5000;
app.use('/authentication', authenticationRoutes_1.default);
// Health check route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});
// Run Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
