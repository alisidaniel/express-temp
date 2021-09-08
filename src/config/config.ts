import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT: number =
  parseInt(<string>process.env.SERVER_PORT, 10) || 5000;
const SERVER_HOST_NAME: string = process.env.SERVER_HOST_NAME || "localhost";
const DB_URL: string =
  process.env.DB_URL ||
  "mongodb+srv://user:1234567890@cluster0.ecduv.mongodb.net/test";

const SERVER = {
  hostname: SERVER_HOST_NAME,
  port: SERVER_PORT,
  db: DB_URL,
};

const config = {
  server: SERVER,
};

export default config;
