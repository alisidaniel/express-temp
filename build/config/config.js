"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10) || 5000;
const SERVER_HOST_NAME = process.env.SERVER_HOST_NAME || "localhost";
const DB_URL = process.env.DB_URL ||
    "mongodb+srv://user:1234567890@cluster0.ecduv.mongodb.net/test";
const SERVER = {
    hostname: SERVER_HOST_NAME,
    port: SERVER_PORT,
    db: DB_URL,
};
const config = {
    server: SERVER,
};
exports.default = config;
