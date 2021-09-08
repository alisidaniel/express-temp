import express, { Application, RequestHandler } from "express";
import http from "http";
import database from "./database/connection";
import config from "./config/config";

const app: Application = express();
const httpServer = http.createServer(app);

try {
  httpServer.listen(config.server.port, () => {
    console.info(`Server running on port: ${config.server.port}`);
  });
} catch (err) {
  console.log(err);
}
