"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config/config"));
const app = express_1.default();
const httpServer = http_1.default.createServer(app);
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
try {
    httpServer.listen(config_1.default.server.port, () => {
        console.info(`Server running on port: ${config_1.default.server.port}`);
    });
}
catch (err) {
    console.log(err);
}
