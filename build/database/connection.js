"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
const connection = mongoose_1.default
    .connect(config_1.default.server.db, {
// useUnifiedTopology: true,
// useNewUrlParser: true,
// useCreateIndex: true,
})
    .then(() => {
    console.log(`DB::connected`);
})
    .catch((e) => {
    console.log(`DB::disconnected`);
});
exports.default = connection;
