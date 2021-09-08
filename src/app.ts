import express, { Application, RequestHandler } from "express";
import http from "http";
import config from "./config/config";

const app: Application = express();
const httpServer = http.createServer(app);
app.use(express.urlencoded({ extended: false }) as RequestHandler);
app.use(express.json() as RequestHandler);

try {
  httpServer.listen(config.server.port, () => {
    console.info(`Server running on port: ${config.server.port}`);
  });
} catch (err) {
  console.log(err);
}
