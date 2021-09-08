import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT: number =
  parseInt(<string>process.env.SERVER_PORT, 10) || 5000;
const SERVER_HOST_NAME: string = process.env.SERVER_HOST_NAME || "localhost";

const SERVER = {
  hostname: SERVER_HOST_NAME,
  port: SERVER_PORT,
};

const config = {
  server: SERVER,
};

export default config;
